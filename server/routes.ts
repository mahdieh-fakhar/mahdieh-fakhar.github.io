import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { analyzeDocumentImage, type DocumentAnalysisResult } from "./openai";

// Configure multer for memory storage
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept images only
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'));
    }
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Document Analysis Endpoint
  app.post('/api/documents/analyze', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          error: 'No file uploaded',
        });
      }

      const category = req.body.category || 'certificate';

      // Note: PDF files would require additional parsing (pdf-parse library)
      // For now, we only support image files
      if (req.file.mimetype === 'application/pdf') {
        return res.status(400).json({
          success: false,
          error: 'PDF files are not supported. Please upload an image (PNG, JPG, JPEG, WebP) instead.',
        });
      }

      // Convert buffer to base64
      const base64Image = req.file.buffer.toString('base64');

      // Analyze with OpenAI Vision
      const analysisResult: DocumentAnalysisResult = await analyzeDocumentImage(
        base64Image,
        category
      );

      if (!analysisResult.success) {
        return res.status(500).json(analysisResult);
      }

      // Save analysis to storage
      const savedAnalysis = await storage.saveDocumentAnalysis({
        fileName: req.file.originalname,
        fileUrl: `data:${req.file.mimetype};base64,${base64Image}`,
        extractedText: analysisResult.analysis.extractedText,
        analysisDate: new Date().toISOString(),
        metadata: {
          documentType: analysisResult.analysis.documentType,
          confidence: analysisResult.analysis.confidence,
          ...analysisResult.analysis.keyInformation,
        },
      });

      res.json({
        success: true,
        analysis: analysisResult.analysis,
        id: savedAnalysis.id,
      });
    } catch (error) {
      console.error('Document analysis error:', error);
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      });
    }
  });

  // Get all document analyses
  app.get('/api/documents', async (req, res) => {
    try {
      const analyses = await storage.getAllDocumentAnalyses();
      res.json(analyses);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      });
    }
  });

  // Get single document analysis
  app.get('/api/documents/:id', async (req, res) => {
    try {
      const analysis = await storage.getDocumentAnalysis(req.params.id);
      if (!analysis) {
        return res.status(404).json({
          success: false,
          error: 'Document not found',
        });
      }
      res.json(analysis);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error instanceof Error ? error.message : 'Internal server error',
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

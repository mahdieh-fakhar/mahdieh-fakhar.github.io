import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileText, Sparkles, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface DocumentUploadProps {
  category?: string;
  onAnalysisComplete?: (result: any) => void;
}

export function DocumentUpload({ category = "certificate", onAnalysisComplete }: DocumentUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setAnalysis(null);
      setError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
    },
    maxFiles: 1,
  });

  const analyzeDocument = async () => {
    if (!file) return;

    setAnalyzing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);

      const response = await fetch('/api/documents/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();
      setAnalysis(result);
      onAnalysisComplete?.(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to analyze document');
    } finally {
      setAnalyzing(false);
    }
  };

  const retry = () => {
    setAnalysis(null);
    setError(null);
    analyzeDocument();
  };

  return (
    <div className="space-y-6">
      {/* Upload Zone */}
      <Card
        {...getRootProps()}
        className={`border-2 border-dashed transition-colors cursor-pointer ${
          isDragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
        }`}
        data-testid="dropzone-document-upload"
      >
        <CardContent className="flex flex-col items-center justify-center py-12">
          <input {...getInputProps()} data-testid="input-file-upload" />
          <Upload className={`h-12 w-12 mb-4 ${isDragActive ? 'text-primary' : 'text-muted-foreground'}`} />
          <p className="text-center text-sm text-muted-foreground">
            {isDragActive ? (
              "Drop your document here..."
            ) : file ? (
              <>
                <FileText className="inline-block h-4 w-4 mr-1" />
                {file.name}
              </>
            ) : (
              "Drag & drop a document or click to browse"
            )}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Supports: Images (PNG, JPG, JPEG, WebP)
          </p>
        </CardContent>
      </Card>

      {/* Analyze Button */}
      {file && !analysis && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <Button
            onClick={analyzeDocument}
            disabled={analyzing}
            size="lg"
            className="gap-2"
            data-testid="button-analyze-document"
          >
            {analyzing ? (
              <>
                <Sparkles className="h-4 w-4 analyzing" />
                Analyzing with AI...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Analyze with AI
              </>
            )}
          </Button>
        </motion.div>
      )}

      {/* Analysis Result */}
      <AnimatePresence>
        {analysis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="border-ai-accent/20 bg-ai-accent/5">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    <h3 className="font-semibold">AI Analysis Complete</h3>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={retry}
                    className="gap-2"
                    data-testid="button-retry-analysis"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Retry
                  </Button>
                </div>

                {/* Document Preview */}
                {file && file.type.startsWith('image/') && (
                  <div className="rounded-lg overflow-hidden border">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="Document preview"
                      className="w-full max-h-64 object-contain bg-muted"
                    />
                  </div>
                )}

                {/* Extracted Information */}
                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Extracted Information</h4>
                  <div className="bg-card rounded-md p-4 space-y-2">
                    {analysis.analysis?.documentType && (
                      <div>
                        <span className="text-xs text-muted-foreground">Type: </span>
                        <Badge variant="outline" className="ml-2">{analysis.analysis.documentType}</Badge>
                      </div>
                    )}
                    
                    <div className="mt-3">
                      <span className="text-xs text-muted-foreground block mb-2">Content:</span>
                      <div className="text-sm space-y-1 font-mono text-muted-foreground bg-muted/50 p-3 rounded">
                        {analysis.analysis?.extractedText?.split('\n').map((line: string, idx: number) => (
                          <p key={idx}>{line}</p>
                        ))}
                      </div>
                    </div>

                    {analysis.analysis?.keyInformation && Object.keys(analysis.analysis.keyInformation).length > 0 && (
                      <div className="mt-3 space-y-2">
                        <span className="text-xs text-muted-foreground">Key Details:</span>
                        {Object.entries(analysis.analysis.keyInformation).map(([key, value]) => (
                          <div key={key} className="flex items-start gap-2">
                            <span className="text-xs text-muted-foreground capitalize">{key}:</span>
                            <span className="text-sm">{String(value)}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {analysis.analysis?.confidence && (
                      <div className="mt-3">
                        <span className="text-xs text-muted-foreground">Confidence: </span>
                        <Badge variant="secondary" className="ml-2">
                          {Math.round(analysis.analysis.confidence * 100)}%
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="border-destructive/50 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    <p className="text-sm text-destructive">{error}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={retry}
                    className="gap-2"
                    data-testid="button-retry-error"
                  >
                    <RefreshCw className="h-4 w-4" />
                    Retry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

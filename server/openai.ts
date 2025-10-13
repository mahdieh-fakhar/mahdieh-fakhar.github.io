import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const MODEL = "gpt-4.1-mini";

export interface DocumentAnalysisResult {
  success: boolean;
  analysis: {
    extractedText: string;
    documentType?: string;
    keyInformation?: {
      title?: string;
      date?: string;
      institution?: string;
      [key: string]: any;
    };
    confidence?: number;
  };
  error?: string;
}

/**
 * Analyze a document image using OpenAI Vision
 * Extracts text and identifies key information
 */
export async function analyzeDocumentImage(
  base64Image: string,
  category: string = "certificate"
): Promise<DocumentAnalysisResult> {
  try {
    const prompt = `Analyze this ${category} document image and extract all text and relevant information.

Please provide:
1. All visible text in the document (verbatim)
2. Document type (e.g., certificate, diploma, conference badge, publication, etc.)
3. Key information such as:
   - Title/Name of the document
   - Date(s) mentioned
   - Institution/Organization name
   - Any recipient names
   - Any other relevant details

Respond with JSON in this exact format:
{
  "extractedText": "all visible text here",
  "documentType": "type of document",
  "keyInformation": {
    "title": "title if present",
    "date": "date if present",
    "institution": "institution if present"
  },
  "confidence": 0.95
}`;

    const response = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${base64Image}`
              }
            }
          ],
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 2048,
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error("No response from OpenAI");
    }

    const result = JSON.parse(content);

    return {
      success: true,
      analysis: {
        extractedText: result.extractedText || "",
        documentType: result.documentType,
        keyInformation: result.keyInformation || {},
        confidence: result.confidence || 0.8,
      },
    };
  } catch (error) {
    console.error("OpenAI analysis error:", error);
    return {
      success: false,
      analysis: {
        extractedText: "",
      },
      error: error instanceof Error ? error.message : "Failed to analyze document",
    };
  }
}

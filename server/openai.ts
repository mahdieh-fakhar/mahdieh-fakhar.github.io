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
  category: string = "certificate",
  mimeType: string = "image/jpeg",
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

    const response = await openai.responses.parse({
      model: MODEL,
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: prompt,
            },
            {
              type: "input_image",
              image_url: `data:${mimeType};base64,${base64Image}`,
              detail: "high",
            },
          ],
        },
      ],
      text: {
        format: {
          type: "json_schema",
          name: "DocumentAnalysis",
          schema: {
            type: "object",
            additionalProperties: true,
            properties: {
              extractedText: { type: "string" },
              documentType: { type: "string" },
              keyInformation: {
                type: "object",
                additionalProperties: true,
                properties: {
                  title: { type: "string" },
                  date: { type: "string" },
                  institution: { type: "string" },
                },
              },
              confidence: { type: "number" },
            },
            required: ["extractedText"],
          },
        },
      },
      max_output_tokens: 2048,
    });

    const parsed = response.output_parsed as {
      extractedText?: string;
      documentType?: string;
      keyInformation?: Record<string, unknown>;
      confidence?: number;
    } | null;

    if (!parsed) {
      throw new Error("No response from OpenAI");
    }

    return {
      success: true,
      analysis: {
        extractedText: parsed.extractedText ?? "",
        documentType: parsed.documentType,
        keyInformation: parsed.keyInformation ?? {},
        confidence:
          typeof parsed.confidence === "number" && !Number.isNaN(parsed.confidence)
            ? parsed.confidence
            : 0.8,
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

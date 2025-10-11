import { type DocumentAnalysis } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Document Analysis
  saveDocumentAnalysis(analysis: Omit<DocumentAnalysis, 'id'>): Promise<DocumentAnalysis>;
  getDocumentAnalysis(id: string): Promise<DocumentAnalysis | undefined>;
  getAllDocumentAnalyses(): Promise<DocumentAnalysis[]>;
}

export class MemStorage implements IStorage {
  private documentAnalyses: Map<string, DocumentAnalysis>;

  constructor() {
    this.documentAnalyses = new Map();
  }

  async saveDocumentAnalysis(analysis: Omit<DocumentAnalysis, 'id'>): Promise<DocumentAnalysis> {
    const id = randomUUID();
    const doc: DocumentAnalysis = { ...analysis, id };
    this.documentAnalyses.set(id, doc);
    return doc;
  }

  async getDocumentAnalysis(id: string): Promise<DocumentAnalysis | undefined> {
    return this.documentAnalyses.get(id);
  }

  async getAllDocumentAnalyses(): Promise<DocumentAnalysis[]> {
    return Array.from(this.documentAnalyses.values());
  }
}

export const storage = new MemStorage();

import { z } from "zod";

// Education Schema
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  thesis?: string;
  thesisGrade?: string;
  description?: string;
  distinction?: string;
}

// Publication/Article Schema
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  type: 'journal' | 'conference' | 'book' | 'review';
  url?: string;
  abstract?: string;
}

// Conference Schema
export interface Conference {
  id: string;
  name: string;
  location: string;
  date: string;
  role?: string;
  type: 'attendance' | 'presentation' | 'organization';
  imageUrl?: string;
}

// Membership Schema
export interface Membership {
  id: string;
  organization: string;
  role: string;
  period: string;
  description?: string;
}

// Career/Experience Schema
export interface Experience {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
  type: 'teaching' | 'management' | 'research' | 'professional';
}

// Skill Schema
export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency?: number; // 1-5
}

// Project Schema
export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  period: string;
  technologies?: string[];
  url?: string;
  imageUrl?: string;
}

// Document Analysis Schema (for AI-powered document upload)
export interface DocumentAnalysis {
  id: string;
  fileName: string;
  fileUrl?: string;
  extractedText: string;
  analysisDate: string;
  metadata?: {
    documentType?: string;
    confidence?: number;
    [key: string]: any;
  };
}

// Document Upload Schema
export const documentUploadSchema = z.object({
  file: z.any(), // Will be handled by multer
  category: z.enum(['certificate', 'publication', 'conference', 'other']).optional(),
});

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

// AI Analysis Response Schema
export interface AIAnalysisResponse {
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

# Mahdieh Fakhar - AI-Powered Digital Portfolio

## Overview
Professional digital portfolio for Mahdieh Fakhar, a Data Scientist and Researcher specializing in Big Data, AI, and Bibliometric Analysis. This portfolio showcases academic achievements, research publications, conference participations, and professional projects with AI-powered document analysis capabilities.

## Purpose
- Display comprehensive academic and professional credentials
- Showcase research publications and conference presentations
- Demonstrate technical skills in data science and analysis
- Provide AI-powered document verification for certificates and credentials
- Serve as a professional hub for research collaborations and opportunities

## Current State
**Status**: Task 1 (Schema & Frontend) Complete - Building comprehensive portfolio UI

**Completed**:
- ✅ Data models and TypeScript interfaces defined
- ✅ Design tokens configured (colors, typography, spacing)
- ✅ SEO meta tags and Open Graph implementation
- ✅ Dark/Light theme toggle with ThemeProvider
- ✅ Professional Header with responsive navigation
- ✅ Footer with contact information and social links
- ✅ All 11 pages implemented (Home, About, Education, Articles, Conferences, Memberships, Career, Skills, Projects, Resume, Contact)
- ✅ AI Document Upload component for certificate analysis
- ✅ Responsive design with smooth animations
- ✅ Accessible UI components with proper ARIA labels

**In Progress**:
- Backend API implementation for document analysis
- OpenAI Vision integration for AI-powered text extraction

## Recent Changes
- **2025-10-11**: Initial project setup with complete frontend architecture
- **2025-10-11**: Implemented all portfolio pages with professional design
- **2025-10-11**: Added AI document upload component with analysis UI
- **2025-10-11**: Configured theme system and navigation

## Project Architecture

### Frontend Stack
- **Framework**: React with TypeScript
- **Routing**: Wouter for multi-page navigation
- **Styling**: Tailwind CSS with Shadcn UI components
- **Animations**: Framer Motion
- **State Management**: TanStack Query for data fetching
- **Forms**: React Hook Form with Zod validation
- **Theme**: Dark/Light mode with local storage persistence

### Backend Stack
- **Server**: Express.js
- **AI Integration**: OpenAI GPT-5 Vision for document analysis
- **File Upload**: Multer for multipart/form-data
- **Storage**: In-memory storage for document analysis results

### Key Features
1. **Multi-page Portfolio**: 11 separate pages with individual URLs
2. **AI Document Analysis**: Upload certificates/documents for AI-powered text extraction
3. **Responsive Design**: Mobile-first approach with breakpoint optimization
4. **Dark/Light Theme**: Persistent theme preference
5. **SEO Optimized**: Complete meta tags, Open Graph, and semantic HTML
6. **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation

## Pages
1. **Home** (`/`): Hero section with introduction and featured work
2. **About** (`/about`): Professional summary, languages, and research interests
3. **Education** (`/education`): Academic timeline with degrees and achievements
4. **Articles** (`/articles`): Published research and journal articles
5. **Conferences** (`/conferences`): Conference attendance, presentations, and AI certificate upload
6. **Memberships** (`/memberships`): Professional affiliations and review experience
7. **Career** (`/career`): Work history timeline with teaching and management roles
8. **Skills** (`/skills`): Technical skills matrix with proficiency levels
9. **Projects** (`/projects`): Research projects and web development work
10. **Resume** (`/resume`): Comprehensive CV with download option
11. **Contact** (`/contact`): Contact form and professional links

## Color Scheme
### Light Mode
- Primary: Deep Professional Blue (220 85% 35%)
- Accent: Data Science Teal (200 70% 45%)
- AI Accent: Innovation Purple (280 60% 50%)
- Background: Soft White (210 20% 98%)

### Dark Mode  
- Primary: Lighter Blue (220 80% 65%)
- Accent: Soft Teal (200 60% 60%)
- AI Accent: Soft Purple (280 55% 65%)
- Background: Deep Dark (220 25% 8%)

## Typography
- **Primary**: Inter (Google Fonts) - Clean, professional
- **Monospace**: JetBrains Mono - For code and technical content

## User Preferences
- Professional academic portfolio design
- AI-powered features highlighted with purple accent color
- Clean, modern interface with subtle animations
- Multi-page architecture (not single-page)
- English language primary
- Emphasis on data science and research expertise

## External Services
- **OpenAI API**: GPT-5 Vision for document analysis and text extraction
- **GitHub Pages**: Deployment target (https://mahdieh-fakhar.github.io/)

## Environment Variables
- `OPENAI_API_KEY`: OpenAI API key for AI document analysis
- `SESSION_SECRET`: Session secret for backend (if needed)

## Development Workflow
1. Frontend built with React + TypeScript + Tailwind
2. Backend APIs for file upload and AI analysis
3. OpenAI Vision integration for intelligent document processing
4. Testing with playwright for e2e validation
5. Deployment to GitHub Pages with automated workflow

## Next Steps
1. Complete backend API implementation (Task 2)
2. Integrate OpenAI Vision for document analysis
3. Connect frontend to backend APIs (Task 3)
4. Add error handling and loading states
5. Test all features and user journeys
6. Create comprehensive README with deployment instructions
7. Write GitHub Actions deploy.yml for automated deployment

## Notes
- Portfolio emphasizes AI capabilities and data science expertise
- All document analysis happens server-side with OpenAI Vision
- Results are displayed in a catalog format with retry functionality
- Design follows Material Design 3 principles with tech-forward aesthetics

# Mahdieh Fakhar - AI-Powered Digital Portfolio

A professional, AI-powered digital portfolio showcasing academic achievements, research publications, and professional experience in data science and research.

[![Deploy to GitHub Pages](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/workflows/Deploy/badge.svg)](https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io/actions)

## ✨ Features

### 🎯 Core Features
- **Multi-Page Architecture**: 11 separate pages with individual URLs
- **AI-Powered Document Analysis**: Upload certificates and documents for intelligent text extraction using OpenAI Vision
- **Dark/Light Theme**: Persistent theme preference with smooth transitions
- **Responsive Design**: Mobile-first approach optimized for all devices
- **SEO Optimized**: Complete meta tags, Open Graph, and semantic HTML
- **Accessibility**: WCAG compliant with ARIA labels and keyboard navigation

### 📄 Pages
1. **Home** - Hero section with introduction and featured work
2. **About** - Professional summary, languages, and research interests
3. **Education** - Academic timeline with degrees and achievements
4. **Articles** - Published research and journal articles
5. **Conferences** - Conference attendance, presentations, and AI certificate upload
6. **Memberships** - Professional affiliations and review experience
7. **Career** - Work history timeline with teaching and management roles
8. **Skills** - Technical skills matrix with proficiency levels
9. **Projects** - Research projects and web development work
10. **Resume** - Comprehensive CV with download option
11. **Contact** - Contact form and professional links

### 🤖 AI Integration
- **OpenAI GPT-5 Vision**: Analyzes document images to extract text and identify key information
- **Smart Document Processing**: Automatically detects document type, dates, institutions, and other relevant details
- **Retry Functionality**: Re-analyze documents if initial results aren't satisfactory
- **Catalog Display**: Extracted information displayed in an organized, readable format

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Use this template** (Click the green "Use this template" button above) or clone:
   ```bash
   git clone https://github.com/mahdieh-fakhar/mahdieh-fakhar.github.io.git
   cd mahdieh-fakhar.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   SESSION_SECRET=your_session_secret_here
   ```

4. **Run development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to `http://localhost:5000`

## 🎨 Customization Guide

### 1. Personal Information

Update your information in these files:

**`client/index.html`** - Update meta tags:
```html
<title>Your Name - Data Scientist | Researcher</title>
<meta name="description" content="Your description here" />
<meta property="og:title" content="Your Name - Your Title" />
```

**`shared/schema.ts`** - No changes needed unless adding new data types

**Component Files** - Update content in:
- `client/src/pages/Home.tsx` - Hero section, introduction
- `client/src/pages/About.tsx` - Professional summary
- `client/src/pages/Education.tsx` - Academic degrees
- `client/src/pages/Articles.tsx` - Publications
- `client/src/pages/Conferences.tsx` - Conference participation
- `client/src/pages/Memberships.tsx` - Professional affiliations
- `client/src/pages/Career.tsx` - Work experience
- `client/src/pages/Skills.tsx` - Technical skills
- `client/src/pages/Projects.tsx` - Research and development projects
- `client/src/pages/Contact.tsx` - Contact information

### 2. Images

Replace these images in `client/public/images/`:
- `logo.png` - Your logo (transparent background recommended)
- `profile.jpg` - Your professional photo

### 3. Colors and Theme

Modify `client/src/index.css` to change color scheme:

```css
:root {
  --primary: 220 85% 35%;        /* Your primary color */
  --accent: 200 70% 45%;          /* Your accent color */
  --ai-accent: 280 60% 50%;       /* AI features accent */
}

.dark {
  --primary: 220 80% 65%;
  --accent: 200 60% 60%;
  --ai-accent: 280 55% 65%;
}
```

### 4. Social Links

Update in `client/src/components/Footer.tsx` and `client/src/pages/Contact.tsx`:
- Email address
- LinkedIn profile URL
- GitHub profile URL

## 📦 Tech Stack

### Frontend
- **React** with TypeScript
- **Tailwind CSS** + Shadcn UI components
- **Wouter** for routing
- **Framer Motion** for animations
- **TanStack Query** for data fetching
- **React Hook Form** + Zod for forms

### Backend
- **Express.js**
- **OpenAI GPT-5 Vision** for document analysis
- **Multer** for file uploads
- **In-memory storage** (easily replaceable with database)

## 🚢 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` → `/` (root)
   - Save

2. **Update the deploy workflow**:
   The `.github/workflows/deploy.yml` is already configured for GitHub Pages

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

4. **Wait for deployment**:
   Check the Actions tab for deployment status

5. **Access your site**:
   `https://your-username.github.io/`

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in `client/public/`:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add CNAME record pointing to `your-username.github.io`
   - Or A records pointing to GitHub Pages IPs

3. Update in repository Settings → Pages → Custom domain

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Project Structure

```
├── client/                    # Frontend React app
│   ├── public/               # Static assets
│   │   └── images/          # Logo and photos
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   └── lib/             # Utilities
├── server/                   # Backend Express app
│   ├── openai.ts            # OpenAI integration
│   ├── routes.ts            # API routes
│   └── storage.ts           # Data storage
├── shared/                   # Shared types and schemas
│   └── schema.ts
└── .github/
    └── workflows/
        └── deploy.yml       # GitHub Actions deployment
```

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📝 License

MIT License - feel free to use this template for your own portfolio.

## 💬 Support

For questions or issues:
- Open an issue on GitHub
- Email: mfsh.intl@gmail.com

---

**Built with ❤️ using React, TypeScript, and AI**

*Powered by OpenAI GPT-5 Vision for intelligent document analysis*

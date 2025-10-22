# Design Guidelines: AI-Powered Academic Portfolio

## Design Approach
**Hybrid Professional-Tech Design System**
- **Base Framework**: Material Design 3 principles for academic credibility and accessibility
- **Tech Enhancement**: Modern tech-forward aesthetics to showcase AI capabilities and data science expertise
- **Key Principles**: Professional clarity, subtle innovation, content hierarchy, trustworthy presentation

## Color Palette

### Light Mode
- **Primary**: 220 85% 35% (Deep Professional Blue - academic authority)
- **Secondary**: 200 70% 45% (Data Science Teal - analytical)
- **Accent**: 280 60% 50% (AI Purple - innovation, used sparingly for AI features)
- **Background**: 210 20% 98% (Soft White)
- **Surface**: 0 0% 100% (Pure White for cards)
- **Text Primary**: 220 20% 15%
- **Text Secondary**: 220 15% 40%

### Dark Mode
- **Primary**: 220 80% 65% (Lighter Blue)
- **Secondary**: 200 60% 60% (Soft Teal)
- **Accent**: 280 55% 65% (Soft Purple for AI elements)
- **Background**: 220 25% 8% (Deep Dark)
- **Surface**: 220 20% 12% (Card Surface)
- **Text Primary**: 210 20% 95%
- **Text Secondary**: 210 15% 70%

## Typography
- **Primary Font**: 'Inter' (Google Fonts) - clean, professional, excellent for academic content
- **Headings**: Inter 700 (Bold) - sizes from text-4xl to text-lg
- **Body**: Inter 400 (Regular) - text-base (16px)
- **Data/Code**: 'JetBrains Mono' for technical content, statistics
- **Academic Credentials**: Inter 600 (Semibold) for emphasis on degrees, publications

## Layout System
**Spacing Primitives**: Tailwind units of 2, 4, 6, 8, 12, 16, 24
- Container: max-w-7xl for main content
- Sections: py-16 desktop, py-12 mobile
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8

## Component Library

### Header (Fixed/Sticky)
- Logo: "MF" monogram (processed from Logo_1760173933874.png, background removed)
- Navigation: Horizontal menu with all pages, smooth underline indicator on active page
- Theme toggle: Sun/moon icon with smooth transition
- Mobile: Hamburger menu with slide-in drawer

### Hero Section (Home Page)
- Professional headshot (from 3.jpg, professionally retouched)
- Name in large typography (text-5xl): "MAHDIEH FAKHAR"
- Subtitle: "Data Scientist | Researcher | AI Enthusiast"
- Brief intro with typing animation effect
- CTA buttons: "View Resume" and "Contact Me" with subtle hover effects
- Background: Subtle gradient or geometric pattern suggesting data/analysis

### AI Document Upload Cards
- Card design with border and shadow on light, glow effect on dark
- Image preview at top (max-height, object-cover)
- AI-extracted content below in structured catalog format
- Retry button (icon + text) in accent color
- Upload zone with drag-and-drop visual feedback
- Progress indicator during AI analysis

### Content Cards
- **Publication Cards**: Title, journal, year, abstract preview, "Read More" link
- **Conference Cards**: Conference image from zip, title, location, date, role
- **Education Cards**: Degree icon, institution, GPA badge, year range, thesis title
- **Skills Cards**: Icon, skill name, proficiency bar (data visualization style)

### Footer
- Three columns: About/Bio, Quick Links (all pages), Contact Info
- Social icons: LinkedIn, GitHub, Email (from user data)
- Copyright and "Built with AI" badge
- Subtle top border

## Animations & Interactions
- **Minimal approach**: Fade-in on scroll for cards, subtle hover lifts (translate-y)
- **AI elements**: Gentle pulse on "analyzing" state, checkmark animation on completion
- **Page transitions**: Smooth fade between routes (if using SPA architecture)
- **NO distracting animations**: Keep focus on content and credentials

## Images Strategy

### Hero Section
- Professional headshot (3.jpg retouched): Remove background distractions, enhance lighting, professional color grading
- Position: Right side on desktop, top on mobile
- Treatment: Subtle shadow, rounded corners (lg)

### Conference Page
- Gallery grid from Conference.zip images
- 3-column grid desktop, 2-column tablet, 1-column mobile
- Lightbox on click for full-size view
- Captions: Conference name, location, date

### Logo Usage
- Header: Small version (h-10)
- Footer: Medium version (h-16) 
- Favicon: Generated from logo

## Page-Specific Layouts

### Multi-Page Architecture (Critical)
Each page has distinct URL and layout:
- **/home**: Hero + Featured work + Recent publications
- **/about**: Bio + Interests + Current work
- **/education**: Timeline of degrees with expandable details
- **/articles**: Filterable list of publications
- **/conferences**: Image gallery + participation list with AI upload for certificates
- **/memberships**: Cards with organization logos
- **/career-history**: Timeline with role descriptions
- **/skills**: Categorized skill matrix with proficiency
- **/projects**: Project cards (IHUPA, AGORA, portfolio examples)
- **/resume**: Downloadable CV + visual resume
- **/contact**: Form + contact details + office hours

## Accessibility
- WCAG AA compliant contrast ratios
- ARIA labels on all interactive elements
- Keyboard navigation for all features
- Focus indicators visible in both themes
- Alt text for all images (especially academic credentials)
- Semantic HTML structure

## Technical Performance
- Lazy load images except above-fold hero
- Optimized conference images (WebP format)
- Minimal JavaScript for AI features only
- Static generation for academic content (unchanging credentials)
- SEO meta tags with academic keywords: "data scientist", "researcher", "UNED", "bibliometric analysis"

## AI Integration Visual Language
- Accent purple color for AI-powered elements
- Sparkle icon (✨) or neural network icon for AI features
- "AI-Analyzed" badge on processed documents
- Processing state: Animated dots or progress bar
- Success state: Green checkmark with micro-animation

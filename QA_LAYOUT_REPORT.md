## VSCode Extension Recommendations

- HTMLHint
- Stylelint
- ESLint
- Error Lens
- Headings Map
- Axe DevTools (browser)
- WAVE (browser)
- Color Contrast Checker
- Live Server

## Audit Log

| Page/Component | Viewport | Issue Description | Steps to Reproduce | Severity | Decision / Resolution | Status |
| -------------- | -------- | ----------------- | ------------------ | -------- | ---------------------- | ------ |
| Global routing (any page) | Desktop ≥1280px | Refreshing deep links shows header/footer only; SPA bundle fails to attach after fallback loader | Open `/about`, press Ctrl+F5; observe content missing | Critical | Investigate manifest loader + route hydration; ensure hashed assets served and React mounts correctly | Open |

## Page Map & Responsive Matrix

### Targeted Pages / Components
- Home
- About
- Projects
- Resume / CV
- Contact
- Certifications (listing)
- Reusable sections: Header, Footer, Project cards, Certification badges, Forms

### Responsive Breakpoints
- Mobile: 320px, 360px, 390px, 414px
- Tablet: 768px, 834px
- Desktop: 1024px, 1280px, 1440px, 1920px
- Pixel Density: 1x, 2x
- Browsers: Chrome, Firefox, Safari
- Directions: LTR, RTL

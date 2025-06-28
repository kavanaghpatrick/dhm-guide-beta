# DHM Guide Beta - Next.js Version

This is the Next.js beta version of DHM Guide, built for improved performance and SEO through server-side rendering.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Instant page loads and improved SEO
- **Optimized Images** - Next.js Image component with responsive loading
- **Dynamic Blog System** - "Never Hungover" blog with 53+ articles
- **Performance Focused** - Built to achieve <2.5s LCP scores
- **Complete Site Migration** - All pages and functionality from original site

## 📊 Performance Improvements

Migrated from Vite/React to Next.js to address:
- LCP (Largest Contentful Paint) delays of 3.5-5.3 seconds
- Client-side rendering bottlenecks
- SEO limitations

### Performance Targets
- **Current Site (Vite/React)**: LCP 4.9s
- **Beta Site (Next.js)**: Target LCP <1.5s

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.4
- **Styling**: Tailwind CSS
- **Type Safety**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with navigation
├── page.tsx           # Home page
├── guide/             # DHM Guide page
├── reviews/           # Product reviews
├── compare/           # Comparison tool
├── research/          # Scientific research
├── about/             # About page
└── never-hungover/    # Blog system
    ├── page.tsx       # Blog listing
    ├── [slug]/        # Dynamic blog posts
    └── posts.ts       # Blog content
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This site is configured for automatic deployment on Vercel. Connect your GitHub repository to Vercel for automatic deployments on push.

## 📈 Key Pages

- **Home**: Optimized hero section with instant LCP
- **Guide**: Comprehensive DHM guide with scientific backing
- **Reviews**: In-depth product reviews and comparisons
- **Compare**: Side-by-side DHM supplement comparison tool
- **Research**: Scientific studies and clinical evidence
- **Never Hungover**: 53+ blog articles on hangover prevention
- **About**: Mission and company information

## 🔄 Migration Notes

This is a complete migration from the original Vite/React site, preserving:
- All design decisions and styling
- Complete content and functionality
- Navigation and user experience
- SEO optimizations
- Responsive mobile design

---

Built with ❤️ for better mornings
# 🖥️ Personal Portfolio

A sleek, modern, and responsive portfolio bootstrapped with [create-t3-app](https://create.t3.gg/).

## 🚀 Tech Stack
- **Next.js 14**: For server-side rendering and optimized performance
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: For responsive and utility-first styling
- **Framer Motion**: For smooth animations and transitions
- **Locomotive Scroll**: For smooth scrolling experience
- **Vanilla Tilt**: For interactive 3D card hover effects
- **PWA Support**: For mobile-friendly installation

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── assets/             # Images, videos, and other media files
│   ├── fonts/              # Custom font files
│   ├── types/              # Type definitions for service workers
│   ├── EzResume.pdf        # Resume file
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
│
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── ui/             # UI components (button, card, carousel)
│   │   ├── Container.tsx   # Main layout container
│   │   ├── Footer.tsx      # Footer component
│   │   └── Preloader.tsx   # Loading screen component
│   │
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Helper functions (cn, scrollTo)
│   │
│   ├── pages/              # Next.js pages
│   │   ├── _app.tsx        # Custom App component
│   │   ├── _document.tsx   # Custom Document component
│   │   └── index.tsx       # Home page
│   │
│   └── styles/             # CSS styles
│       ├── Home.module.css # Home page styles
│       ├── globals.css     # Global styles
│       └── locomotive-scroll.css # Scroll library styles
│
├── .env.example            # Example environment variables
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## 🎉 Features
- **Responsive Design**: Fully responsive layout optimized for all devices from mobile to desktop
- **Interactive UI**: Smooth animations and transitions using Framer Motion and Locomotive Scroll
- **Dynamic Project Showcase**: Featuring projects in robot vision, software development, and more
- **Professional Experience**: Highlighting work with companies like Liberty Mutual
- **Stunning UI/UX Design**: Modern aesthetics with gradient backgrounds and interactive elements
- **Contact Integration**: Direct email and social media links for easy networking
- **Resume Access**: Direct link to download professional resume
- **Performance Optimized**: Fast loading times and efficient rendering

## 🛠️ Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/developer-portfolio.git
cd developer-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

1. Update personal information in `src/pages/index.tsx`
2. Replace images in the `public/assets` directory
3. Modify project data in the `processImages` array
4. Update services in the `services` array
5. Customize colors and styling in `tailwind.config.ts`

## 📦 Deployment

Follow the deployment guides for:
- [Vercel](https://create.t3.gg/en/deployment/vercel)
- [Netlify](https://create.t3.gg/en/deployment/netlify)
- [Docker](https://create.t3.gg/en/deployment/docker)

## 📄 License

This project is open source and available under the [MIT License](LICENSE.md).

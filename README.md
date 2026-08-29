# Vishnu Murthy Portfolio

A premium, interactive portfolio website showcasing my work as a Software Development Engineer and AI-focused developer. Built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Live Portfolio

**View my portfolio:** [https://vizz-10.github.io/portfolio/](https://vizz-10.github.io/portfolio/)

**GitHub Repository:** [https://github.com/vizz-10/portfolio](https://github.com/vizz-10/portfolio)

## ✨ Features

- **Interactive Hero Section** with particle background and mouse-responsive animations
- **Scroll Progress Indicator** in navigation
- **Custom Cursor** with magnetic effects (desktop only)
- **3D Tilt Cards** with spotlight effects
- **Real-time GitHub Integration** with caching
- **AI Portfolio Assistant** for Q&A about my work
- **Animated Statistics** with counting effects
- **Interactive Project Cards** with detailed case study modals
- **Skills Section** with category filtering and hover effects
- **Timeline Animations** for experience and education
- **Responsive Design** for all screen sizes
- **Accessibility Features** (keyboard navigation, screen reader support, reduced motion)

## 🛠️ Technologies

- **Frontend:** React 19, TypeScript, Vite 8
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/vizz-10/portfolio.git
cd portfolio

# Install dependencies
npm install
```

## 🏃 Running the Project

### Development Server

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:8443`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── profile.png     # Profile picture
│   ├── robots.txt      # SEO configuration
│   └── sitemap.xml     # Sitemap
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and constants
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Customization

### Profile Picture

Replace `public/profile.png` with your own profile picture.

### Content

Edit the content in `src/lib/constants.ts`:
- `PROJECTS` - Your project information
- `SKILLS` - Your technical skills
- `EXPERIENCE` - Work experience
- `EDUCATION` - Educational background
- `CONTACT` - Contact information

### Styling

- Global styles in `src/index.css`
- Tailwind CSS configuration is handled by the `@tailwindcss/vite` plugin
- Custom utilities and animations in `src/lib/animations.ts`

## 🌐 Deployment

### GitHub Pages

1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Set Source to "Deploy from a branch"
4. Select `main` branch and `/root` folder
5. Save

The site will be available at `https://yourusername.github.io/repository-name/`

### Other Platforms

The project can be deployed to:
- **Vercel:** Connect GitHub repository and deploy
- **Netlify:** Drag and drop the `dist` folder after building
- **Any static hosting:** Use the `dist` folder from `npm run build`

## 📱 Responsive Breakpoints

- **Mobile:** 375px - 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** 1024px+

## ♿ Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels and roles
- Focus management
- Screen reader compatible
- Reduced motion support
- Skip to content link

## 🎯 Performance

- Code splitting with React.lazy()
- Optimized images and assets
- Efficient animations with Framer Motion
- API response caching
- Lazy loading for heavy components

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Vishnu Murthy Sonchuri**
- GitHub: [@vizz-10](https://github.com/vizz-10)
- LinkedIn: [vishnumurthysonchuri](https://www.linkedin.com/in/vishnumurthysonchuri/)
- Email: vishnumurthysonchuri@gmail.com

---

Built with curiosity and modern web technologies. 🚀

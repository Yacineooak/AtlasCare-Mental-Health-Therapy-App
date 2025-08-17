# 🧠 AtlasCare - Mental Wellness Platform

> **A world-class, professional mental health platform designed for teens and young adults**

AtlasCare is a comprehensive mental wellness application that combines self-help tools with professional therapist connections in a warm, empathetic, and supportive environment. Built with cutting-edge technology and designed with accessibility and user experience at its core.

## ✨ Features

### 🎯 Core Functionality
- **Intelligent Dashboard** - Real-time wellness insights with AI-powered analytics
- **Mood Tracking** - Emoji-based mood selection with pattern recognition
- **Professional Therapy** - HIPAA-compliant video sessions with licensed therapists
- **Personal Journal** - Customizable themes, stickers, and rich text editing
- **Progress Analytics** - Comprehensive tracking of mental health journey

### 🔒 Security & Privacy
- End-to-end encryption for all communications
- HIPAA compliant infrastructure
- No session recordings policy
- Secure data storage with privacy-first approach

### 🎨 Design Excellence
- **Warm Color Palette** - Soft purples, pastel blues, and calming gradients
- **Accessibility First** - WCAG AA compliant with high contrast support
- **Responsive Design** - Optimized for all devices and screen sizes
- **Glass Morphism UI** - Modern, professional aesthetic with subtle animations

## 🚀 Technology Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling with custom design tokens
- **Shadcn/ui** - High-quality component library
- **Lucide Icons** - Beautiful, consistent iconography

### Fonts & Typography
- **Space Grotesk** - Modern, friendly headings
- **DM Sans** - Clean, readable body text
- Optimized font loading with `next/font`

### State Management
- React Hooks (useState, useEffect)
- Component-level state management
- Real-time updates and interactions

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/atlascare.git
   cd atlascare
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Using Shadcn CLI (Recommended)
\`\`\`bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea
\`\`\`

## 🏗️ Project Structure

\`\`\`
atlascare/
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main application entry point
├── components/
│   ├── ui/                  # Shadcn/ui components
│   ├── dashboard.tsx        # Main dashboard with analytics
│   ├── mood-tracker.tsx     # Mood tracking interface
│   ├── therapy-session.tsx  # Video therapy interface
│   ├── journal-tablet.tsx   # Personal journaling tool
│   └── navigation.tsx       # Sidebar navigation
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
\`\`\`

## 🎨 Design System

### Color Palette
\`\`\`css
/* Primary Colors */
--primary: oklch(0.45 0.12 280);     /* Soft Purple */
--secondary: oklch(0.75 0.08 240);   /* Pastel Blue */
--accent: oklch(0.75 0.08 240);      /* Accent Blue */

/* Semantic Colors */
--background: oklch(0.99 0.005 280); /* Soft White */
--foreground: oklch(0.25 0.02 260);  /* Deep Purple-Gray */
--muted: oklch(0.95 0.01 280);       /* Light Purple-Gray */
\`\`\`

### Typography Scale
- **Headings**: Space Grotesk (400, 600, 700)
- **Body Text**: DM Sans (400, 500)
- **Scale**: text-sm → text-base → text-lg → text-xl → text-2xl → text-4xl

### Component Patterns
- **Glass Morphism**: Subtle transparency with backdrop blur
- **Hover Effects**: Gentle lift animations with shadow enhancement
- **Focus States**: Accessible ring indicators with proper contrast
- **Loading States**: Skeleton screens and shimmer effects

## 🧩 Component Architecture

### Navigation Component
- Collapsible sidebar with theme toggle
- Active state management
- Notification badges
- User profile integration

### Dashboard Component
- Real-time wellness scoring
- Interactive goal tracking
- AI-powered insights
- Community activity feed

### Mood Tracker Component
- Emoji-based mood selection
- Reflection journaling
- Pattern recognition
- Historical analytics

### Therapy Session Component
- Video call interface
- Session controls (audio/video toggle)
- Real-time session notes
- Therapist selection

### Journal Component
- Rich text editing
- Customizable themes
- Sticker system
- Search functionality

## 🔧 Customization

### Adding New Themes
\`\`\`typescript
const newTheme = {
  id: 5,
  name: "Forest",
  colors: ["#2E8B57", "#90EE90", "#228B22"],
  icon: TreeIcon
}
\`\`\`

### Custom Animations
\`\`\`css
@keyframes custom-animation {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}

.custom-hover:hover {
  animation: custom-animation 0.3s ease;
}
\`\`\`

## 📱 Responsive Design

- **Mobile First**: Optimized for touch interactions
- **Tablet**: Enhanced layouts with more screen real estate
- **Desktop**: Full-featured experience with sidebar navigation
- **Large Screens**: Optimized spacing and typography scaling

## ♿ Accessibility Features

- **WCAG AA Compliance**: 4.5:1 contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and roles
- **Reduced Motion**: Respects user motion preferences
- **High Contrast Mode**: Enhanced visibility options
- **Focus Management**: Clear focus indicators

## 🚀 Deployment

### Vercel (Recommended)
\`\`\`bash
npm run build
npx vercel --prod
\`\`\`

### Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### Environment Variables
\`\`\`env
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
\`\`\`

## 📈 Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized with `font-display: swap`
- **Code Splitting**: Automatic route-based splitting
- **Bundle Analysis**: Use `npm run analyze` to inspect bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use semantic commit messages
- Ensure accessibility compliance
- Add tests for new features
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Shadcn/ui** - For the excellent component library
- **Lucide** - For beautiful, consistent icons
- **Tailwind CSS** - For the utility-first CSS framework
- **Next.js Team** - For the amazing React framework
- **Mental Health Community** - For inspiration and guidance

## 📞 Support

- **Phone**: +213 541 09 59 03
- **Email**: stylebenderkh@gmail.com


---

<div align="center">
  <p><strong>Built with ❤️ for mental wellness</strong></p>
  <p>AtlasCare - Empowering teens and young adults on their mental health journey</p>
</div>

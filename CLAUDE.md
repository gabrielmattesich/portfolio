# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Gabriel Mattesich's personal portfolio website (cv-mattesich v1.1.5) built with Next.js 14, showcasing his professional experience as a Software Developer. The portfolio features a modern, animated interface with dark mode styling and complete bilingual support (Spanish/English).

## Commands

### Development
- `npm run dev` - Start development server (Next.js 14)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js ESLint
- `npm run release` - Create new version using standard-version

### Key Dependencies
- **Next.js 14.2.10** with App Router
- **TypeScript 5** for type safety
- **Tailwind CSS 3.4.1** with animations
- **Framer Motion 12.6.3** for advanced animations
- **Radix UI** components (accordion, dialog, progress, scroll-area, tabs, icons)
- **React GitHub Calendar 4.3.0** for live GitHub integration
- **React TSParticles 2.12.2** with TSParticles 3.5.0 for particle effects
- **Next Themes 0.4.6** for dark mode support
- **Lucide React 0.441.0** for modern icons
- **Animated Backgrounds 1.0.8** library
- **Vaul 1.1.2** for mobile drawer components
- **Shadcn UI 0.9.0** component system

## Architecture

### Directory Structure
- `src/app/` - Next.js 14 app router pages and layout
- `src/components/` - Reusable React components
  - `ui/` - Shadcn/ui components (accordion, badge, button, card, dialog, drawer, progress, scroll-area, tabs)
  - `animated-background.tsx` - Animated background component with particle integration
  - `code-particles.tsx` - Canvas-based particle animation with neon effects and optimized performance
  - `cv-download.tsx` - CV download dialog component with Radix UI
  - `githubCalendar.tsx` - Live GitHub contribution calendar integration
  - `tech-flow.tsx` - Technology showcase with flowing animations
  - `time-counter.tsx` - Real-time experience counter since March 10, 2017
- `src/lib/` - Utility functions and centralized data
  - `portafolio-data.ts` - Complete portfolio content (fully bilingual Spanish/English)
  - `reels-data.ts` - Tutorial/video showcase data
  - `utils.ts` - Utility functions and helpers
- `src/types/` - TypeScript type definitions
- `src/assets/` - Static assets and optimized images
- `public/` - Public assets including CV PDF and favicons

### Key Features
- **Complete Bilingual Support**: Full Spanish/English content switching throughout entire application
- **Advanced Animated Interface**: Framer Motion 12.6.3 animations with smooth transitions
- **Immersive Particle Effects**: High-performance canvas-based code particle animations with neon colors
- **Real-time Experience Counter**: Live counter tracking experience since March 10, 2017 (7+ years)
- **Live GitHub Integration**: Real-time GitHub contribution calendar with react-github-calendar
- **Professional CV System**: Dynamic CV download with Radix UI dialog components
- **Modern Theme Support**: Dark mode integration with next-themes 0.4.6
- **Mobile-First Responsive Design**: Optimized mobile experience with Vaul drawer components
- **Modern Component Architecture**: Shadcn/ui components with TypeScript 5 type safety
- **Performance Optimized**: Canvas animations optimized for smooth 60fps performance

### Data Management
Portfolio content is fully centralized in `src/lib/portafolio-data.ts` with comprehensive structure:
- **Complete Bilingual Content**: Spanish as primary, English as secondary language
- **Professional Experience**: Detailed company data, roles, periods, tools, and achievements
- **Dynamic Time Calculations**: Automated experience counter since March 10, 2017
- **Current Position**: Personal Pay - Telecom (July 2025 - Present)
- **Previous Experience**: Naranja X (November 2022 - April 2025) and historical roles
- **Skills & Technologies**: Modern tech stack including AWS, TypeScript, Microservices, DevOps
- **Education & Certifications**: Academic background and professional certifications

### Modern Component Architecture
- **Shadcn/ui Foundation**: Complete component library (v0.9.0) for design consistency
- **Advanced Framer Motion**: Complex animations with optimized performance
- **Canvas Particle Systems**: Real-time particle animations with requestAnimationFrame optimization
- **Theme-Aware Components**: Deep next-themes integration with dark mode support
- **Responsive Tailwind Design**: Mobile-first approach with advanced CSS Grid/Flexbox
- **Radix UI Primitives**: Accessible drawer and dialog components via Vaul
- **Full TypeScript Integration**: Type safety throughout with TypeScript 5
- **Real-time Updates**: Live data integration (GitHub calendar, experience counters)

## Development Guidelines

### Core Files
- **Main Application**: `src/app/page.tsx` - Single-page portfolio application
- **Content Management**: `src/lib/portafolio-data.ts` - All portfolio content and data
- **Tutorial System**: `src/lib/reels-data.ts` - Video/tutorial showcase content
- **Styling**: Global styles in `src/app/globals.css` with Tailwind CSS 3.4.1

### Key Implementation Details
- **Next.js 14 App Router**: Modern routing with server/client components
- **Image Optimization**: Next.js Image component for optimized asset delivery
- **Particle Animation System**: Custom canvas implementation with neon effects
- **Bilingual Architecture**: Complete Spanish/English support across all components
- **Theme System**: next-themes provider with seamless dark mode transitions
- **Experience Counter**: Dynamic calculation from March 10, 2017 start date
- **GitHub Integration**: Live contribution calendar with react-github-calendar 4.3.0

### Performance & Optimization
- **Canvas Rendering**: Optimized for 70% viewport height with requestAnimationFrame
- **Particle Effects**: High-performance animations targeting 60fps
- **Time Calculations**: Daily updates to minimize CPU usage
- **Asset Optimization**: Next.js Image component with automatic optimization
- **Bundle Optimization**: Tailwind CSS purging and Next.js automatic code splitting
- **Responsive Images**: Optimized loading for different screen sizes

### Current Status (v1.1.5)
- **Active Development**: Regular updates and feature enhancements
- **Latest Position**: Personal Pay - Telecom (July 2025 - Present)
- **Version Control**: Standard-version for automated releases
- **Modern Stack**: Latest dependency versions with security updates
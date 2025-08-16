# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a progressive React/Next.js learning repository structured as team lessons. The repository contains multiple steps that teach React concepts incrementally:

- **step01_react1**: Introduction to React components and basic Next.js setup
- **step02_react2**: Props and component communication
- **step03_hooks**: React hooks (useState, useEffect)

Each step is a complete Next.js application that builds upon the previous concepts.

## Development Commands

Each step directory contains its own Next.js project. Navigate to the specific step directory to work with it:

```bash
cd step01_react1  # or step02_react2, step03_hooks
npm run dev       # Start development server with Turbo (http://localhost:3000)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

## Architecture

### Project Structure
Each step follows the Next.js 13+ App Router structure:
- `app/`: Contains pages, components, and layouts
- `app/components/`: Reusable React components (Header, Footer, Todo, Profile)
- `app/globals.css`: Global styles with Tailwind CSS
- `app/layout.js`: Root layout with font configuration
- `public/`: Static assets

### Technology Stack
- **Next.js 15.1.7** with App Router
- **React 19.0.0** with client components ("use client" directive)
- **Tailwind CSS** for styling
- **TypeScript configuration** (though files use .jsx/.js extensions)
- **ESLint** for code quality

### Component Architecture
- Components are functional components using modern React patterns
- Client-side interactivity requires "use client" directive
- Navigation uses Next.js Link component
- Each step progressively introduces new concepts:
  - Step 1: Basic component composition
  - Step 2: Props passing (though Todo component appears unchanged)
  - Step 3: React hooks with useState and useEffect examples

### Key Learning Pages
In step03_hooks, there are dedicated learning pages:
- `/useState`: Demonstrates state management with counter and visibility toggle
- `/useEffect`: Shows component lifecycle with console logging

## Development Notes

- All projects use the same dependencies and configuration
- Client components must be marked with "use client" directive
- The repository uses Japanese comments and content for educational purposes
- Each step maintains the same basic component structure but adds complexity
- Tailwind classes are used for styling throughout the applications
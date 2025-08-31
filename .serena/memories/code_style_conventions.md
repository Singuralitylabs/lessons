# Code Style and Conventions

## File Structure
- Components in `app/components/` directory
- Pages follow Next.js App Router structure (`app/page.jsx`, `app/[route]/page.jsx`)
- File extensions: `.jsx` for React components, `.js` for configuration

## React Patterns
- **Functional components** using arrow functions or function declarations
- **Client-side interactivity** requires `"use client"` directive at top of file
- **Modern React patterns** with hooks (useState, useEffect, useMemo, useCallback)
- **Default exports** for components
- **React imports** explicitly imported: `import React from 'react'`

## Naming Conventions
- **Components**: PascalCase (e.g., `Header`, `UseStatePage`)
- **Files**: PascalCase for components (e.g., `Header.jsx`)
- **Variables**: camelCase (e.g., `isVisible`, `setCount`)

## Styling
- **Tailwind CSS** classes for all styling
- **Responsive design** patterns
- **Utility-first** approach with Tailwind

## Code Formatting (Prettier)
- **Semi-colons**: Always use (semi: true)
- **Quotes**: Double quotes for strings, regular quotes for JSX
- **Print width**: 100 characters
- **Tab width**: 2 spaces, no tabs
- **Trailing commas**: ES5 style
- **Arrow parens**: Avoid when possible

## Comments
- Educational content in Japanese
- Code comments explain React concepts for learning purposes
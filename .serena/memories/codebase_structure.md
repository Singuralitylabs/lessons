# Codebase Structure

## Root Directory
```
team-lessons/
├── CLAUDE.md              # Claude Code instructions
├── README.md              # Basic project description
├── .prettierrc            # Prettier configuration
├── step01_react1/         # Step 1: React components intro
├── step02_react2/         # Step 2: Props and communication
├── step03_hooks/          # Step 3: React hooks
├── step04_create_nextjs/  # Step 4: Next.js creation
├── step05_nextjs_app/     # Step 5: Next.js app development
└── .serena/              # Serena configuration
```

## Each Step Directory Structure
```
stepXX_name/
├── app/                  # Next.js App Router directory
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Todo.jsx
│   │   └── Profile.jsx
│   ├── [routes]/         # Dynamic routes (varies by step)
│   ├── layout.js         # Root layout with fonts
│   ├── page.jsx          # Home page
│   ├── globals.css       # Global Tailwind CSS
│   └── favicon.ico       # Favicon
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.mjs       # Next.js configuration
├── tailwind.config.mjs   # Tailwind CSS configuration
├── postcss.config.mjs    # PostCSS configuration
├── eslint.config.mjs     # ESLint configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Learning Pages (step03_hooks)
- `/useState` - State management examples
- `/useEffect` - Effect hook examples
- `/useMemo` - Memoization examples
- `/useCallback` - Callback memoization examples

## Component Architecture
- Functional components using modern React patterns
- Client components marked with `"use client"` directive
- Navigation using Next.js Link component
- Progressive complexity across steps
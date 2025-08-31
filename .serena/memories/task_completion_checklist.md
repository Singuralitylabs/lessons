# Task Completion Checklist

## After Making Code Changes

### 1. Code Quality Checks
Navigate to the specific step directory and run:
```bash
npm run lint      # Run ESLint to check for code quality issues
```

### 2. Build Verification
```bash
npm run build     # Ensure the project builds without errors
```

### 3. Development Testing
```bash
npm run dev       # Test the application in development mode
```

## Before Committing Changes
1. **Lint check**: Ensure no ESLint errors
2. **Build check**: Verify production build works
3. **Manual testing**: Check the application functions correctly
4. **Code review**: Verify changes follow project conventions

## Project Structure Validation
- Components should be in `app/components/` directory
- Pages should follow App Router structure in `app/` directory
- Client components must have `"use client"` directive when needed
- Maintain consistent file naming (PascalCase for components)

## Educational Context
- Ensure changes maintain the progressive learning structure
- Keep Japanese educational comments where appropriate
- Maintain the step-by-step learning progression
- Each step should build upon previous concepts appropriately
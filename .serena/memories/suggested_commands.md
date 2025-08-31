# Suggested Commands

## Development Commands
Navigate to the specific step directory first, then run:

```bash
# Navigate to specific step
cd step01_react1  # or step02_react2, step03_hooks, etc.

# Development server with Turbo
npm run dev       # Starts server at http://localhost:3000

# Production build and start
npm run build     # Build for production
npm run start     # Start production server

# Code quality
npm run lint      # Run ESLint with Next.js config
```

## System Commands (Darwin/macOS)
- `ls` - List directory contents
- `cd` - Change directory
- `find` - Find files and directories
- `grep` - Search text in files
- `git` - Git version control operations

## Git Operations
- `git status` - Check repository status
- `git add .` - Stage all changes
- `git commit -m "message"` - Commit changes
- `git push` - Push to remote repository

## File Operations
- `mkdir` - Create directories
- `touch` - Create empty files
- `rm` - Remove files
- `cp` - Copy files
- `mv` - Move/rename files

## Project-Specific Notes
- Each step is independent - navigate to the specific step directory before running commands
- All steps use the same npm script structure
- Turbopack is enabled for faster development builds (`--turbopack` flag)
# TypeScript Node.js Application

A modern TypeScript Node.js application with a clean project structure and development tools.

## Features

- TypeScript with strict type checking
- Modern ES2020+ features
- Development server with hot reload
- Clean project structure
- Comprehensive TypeScript configuration

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run in development mode:**

   ```bash
   npm run dev
   ```

3. **Run with auto-reload during development:**

   ```bash
   npm run dev:watch
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Run the built application:**
   ```bash
   npm start
   ```

## Available Scripts

- `npm run dev` - Run the application in development mode
- `npm run dev:watch` - Run with auto-reload on file changes
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run clean` - Remove the dist directory

## Project Structure

```
ts-base/
├── .vscode/
│   ├── launch.json   # VS Code debug configurations
│   ├── settings.json # VS Code workspace settings
│   └── tasks.json    # VS Code build tasks
├── src/
│   ├── index.ts      # Main application entry point
│   └── utils.ts      # Utility functions and classes
├── dist/             # Compiled JavaScript (generated)
├── .github/
│   └── copilot-instructions.md
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Development

The application includes:

- A main entry point with a simple greeting function
- A UserService class for managing user data
- Utility functions for email validation and user formatting
- TypeScript interfaces for type safety
- VS Code debug configurations for both TypeScript and compiled JavaScript
- Build tasks for development workflow

## VS Code Integration

This project is fully configured for VS Code development:

- **Debug Configurations**: Press F5 to launch the TypeScript application directly
- **Build Tasks**: Use Ctrl+Shift+P → "Tasks: Run Task" to access build commands
- **IntelliSense**: Full TypeScript support with auto-imports and suggestions
- **Auto-formatting**: Files are automatically formatted on save

## Next Steps

- Add unit tests with Jest
- Implement error handling and logging
- Add environment configuration
- Set up ESLint and Prettier for code formatting
- Add a web framework like Express.js for REST APIs

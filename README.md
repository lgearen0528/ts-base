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
- `npm run build` - Build the TypeScript code to JavaScript
- `npm start` - Run the built application
- `npm run clean` - Remove the build directory
- `npm run lint` - Check code with Biome linter
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Check code formatting with Biome
- `npm run format:fix` - Fix formatting issues automatically
- `npm run check` - Run both linting and formatting checks
- `npm run check:fix` - Fix both linting and formatting issues
- `npm run ci` - Run CI checks (used in automated builds)
- `npm run precommit` - Run pre-commit checks and fixes
- `npm run validate` - Run build and checks together
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
├── .biomeignore      # Files ignored by Biome
├── biome.json        # Biome configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Code Quality & Formatting

This project uses **Biome** for both linting and formatting, providing:

### Features
- **Fast Performance**: Extremely fast linting and formatting
- **TypeScript Support**: Full TypeScript integration with type-aware rules
- **Consistent Style**: Enforces consistent code style across the project
- **Auto-fixing**: Automatically fixes many issues on save

### Configuration
- **Formatter**: Uses tabs with 2-space width, single quotes, trailing commas
- **Linter**: Comprehensive rule set including TypeScript-specific rules
- **Import Organization**: Automatically sorts and organizes imports
- **VS Code Integration**: Format on save, paste, and quick fixes

### Usage
```bash
# Check all issues
npm run check

# Fix all auto-fixable issues
npm run check:fix

# Format code only
npm run format:fix

# Lint code only
npm run lint:fix

# Run before committing
npm run precommit
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
- **Auto-formatting**: Files are automatically formatted on save with Biome
- **Code Actions**: Quick fixes and import organization on save

## Next Steps

- Add unit tests with Jest
- Implement error handling and logging
- Add environment configuration
- Add a web framework like Express.js for REST APIs

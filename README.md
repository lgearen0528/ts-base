# TypeScript Node.js Application

A modern TypeScript Node.js application with esbuild for fast compilation and development.

## Features

- TypeScript with strict type checking
- Fast compilation with esbuild
- Development server with watch mode
- Modern ES2020+ features
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

### Build & Development
- `npm run build` - Build for production using esbuild
- `npm run build:dev` - Build for development using esbuild
- `npm run build:watch` - Build with watch mode for development
- `npm run dev` - Build and run the application in development mode
- `npm start` - Run the built application
- `npm run clean` - Remove the build directory

### Type Checking & Code Quality
- `npm run type-check` - Run TypeScript type checking (without compilation)
- `npm run lint` - Check code with Biome linter
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Check code formatting with Biome
- `npm run format:fix` - Fix formatting issues automatically
- `npm run check` - Run both linting and formatting checks
- `npm run check:fix` - Fix both linting and formatting issues
- `npm run ci` - Run CI checks (used in automated builds)
- `npm run precommit` - Run pre-commit checks and fixes
- `npm run validate` - Run build, type checking, and code quality checks

## Development with esbuild

This project uses [esbuild](https://esbuild.github.io/) for fast TypeScript compilation instead of the TypeScript compiler (tsc). This provides several benefits:

### Benefits of esbuild
- **Speed**: 10-100x faster than tsc for compilation
- **Watch mode**: Instant rebuilds on file changes
- **ES modules support**: Native ESM and CommonJS support
- **Tree shaking**: Automatic dead code elimination
- **Source maps**: Full source map support for debugging

### Build Modes
- **Development**: Fast builds with inline source maps (`npm run build:dev`)
- **Production**: Optimized builds with minification (`npm run build`)
- **Watch**: Continuous rebuilds during development (`npm run build:watch`)

### Type Checking
Since esbuild doesn't perform type checking, we use TypeScript separately:
- Run `npm run type-check` for type validation
- The `validate` script runs both building and type checking
- VS Code provides real-time type checking in the editor

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
├── esbuild.config.js # esbuild build configuration
├── .esbuildrc.js     # esbuild configuration presets
├── package.json
├── tsconfig.json     # TypeScript configuration (type checking only)
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

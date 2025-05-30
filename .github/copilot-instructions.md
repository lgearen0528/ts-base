<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# TypeScript Node.js Application - Copilot Instructions

This is a TypeScript Node.js application. Please follow these guidelines when generating code:

## Code Style and Standards

- Use TypeScript with strict mode enabled
- Follow ESLint and Prettier conventions
- Use modern ES6+ features and async/await patterns
- Prefer functional programming patterns where appropriate
- Use proper TypeScript types and interfaces

## Project Structure

- Source code should be placed in the `src/` directory
- Compiled JavaScript outputs to the `dist/` directory
- Use barrel exports (index.ts files) for clean module imports
- Separate concerns: utilities, services, models, and main application logic

## Dependencies and Imports

- Prefer named imports over default imports
- Use relative imports for local modules
- Install type definitions (@types/package) for external libraries
- Use npm for package management

## Error Handling and Logging

- Implement proper error handling with try-catch blocks
- Use meaningful error messages
- Consider adding a logging library for production applications

## Testing

- Write unit tests for utility functions and services
- Use Jest or similar testing framework when implementing tests
- Follow test-driven development practices

## Performance and Security

- Validate user inputs and environment variables
- Use environment variables for configuration
- Implement proper data validation
- Consider performance implications for larger applications

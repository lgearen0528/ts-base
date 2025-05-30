/**
 * Main entry point for the TypeScript Node.js application
 */

function greet(name: string): string {
  return `Hello, ${name}! Welcome to your TypeScript Node.js application.`;
}

function main(): void {
  const message = greet("World");
  console.log(message);

  // Example of modern JavaScript/TypeScript features
  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];

  const adults = users.filter((user) => user.age >= 18);
  console.log("Adult users:", adults);

  // Async example
  setTimeout(() => {
    console.log("Application is running successfully!");
  }, 1000);
}

// Run the application
if (require.main === module) {
  main();
}

export { greet, main };

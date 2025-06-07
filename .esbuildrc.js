// esbuild configuration presets
module.exports = {
  // Base configuration shared across all builds
  base: {
    platform: 'node',
    target: 'node14',
    format: 'cjs',
    tsconfig: 'tsconfig.json',
    logLevel: 'info',
    keepNames: true,
  },
  
  // Development configuration
  development: {
    sourcemap: 'inline',
    minify: false,
    define: {
      'process.env.NODE_ENV': '"development"',
    },
  },
  
  // Production configuration
  production: {
    sourcemap: true,
    minify: true,
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    drop: ['console', 'debugger'], // Remove console.log and debugger statements
  },
  
  // Bundle configuration (if you want to bundle dependencies)
  bundle: {
    bundle: true,
    external: ['fsevents'], // Common Node.js modules to keep external
  },
  
  // Analysis configuration (for bundle analysis)
  analyze: {
    metafile: true,
    analyzeMetafile: true,
  },
};

const esbuild = require('esbuild');
const path = require('path');

const baseConfig = {
  entryPoints: ['src/index.ts'],
  bundle: false, // Set to true if you want to bundle dependencies
  outdir: 'dist',
  platform: 'node',
  target: 'node14', // Match your package.json engines requirement
  format: 'cjs', // CommonJS format to match your tsconfig
  sourcemap: true,
  minify: false,
  keepNames: true,
  tsconfig: 'tsconfig.json',
  logLevel: 'info',
};

// Development build
const buildDev = async () => {
  try {
    await esbuild.build({
      ...baseConfig,
      sourcemap: 'inline',
      define: {
        'process.env.NODE_ENV': '"development"',
      },
    });
    console.log('✅ Development build completed');
  } catch (error) {
    console.error('❌ Development build failed:', error);
    process.exit(1);
  }
};

// Production build
const buildProd = async () => {
  try {
    await esbuild.build({
      ...baseConfig,
      minify: true,
      define: {
        'process.env.NODE_ENV': '"production"',
      },
    });
    console.log('✅ Production build completed');
  } catch (error) {
    console.error('❌ Production build failed:', error);
    process.exit(1);
  }
};

// Watch mode for development
const buildWatch = async () => {
  try {
    const ctx = await esbuild.context({
      ...baseConfig,
      sourcemap: 'inline',
      define: {
        'process.env.NODE_ENV': '"development"',
      },
    });

    await ctx.watch();
    console.log('👀 Watching for changes...');
  } catch (error) {
    console.error('❌ Watch mode failed:', error);
    process.exit(1);
  }
};

// Export functions for use in package.json scripts
module.exports = {
  buildDev,
  buildProd,
  buildWatch,
};

// CLI handling
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'dev':
      buildDev();
      break;
    case 'prod':
      buildProd();
      break;
    case 'watch':
      buildWatch();
      break;
    default:
      console.log('Usage: node esbuild.config.js [dev|prod|watch]');
      process.exit(1);
  }
}

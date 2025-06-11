module.exports = function (context, options) {
  return {
    name: 'katex-warning-suppressor',
    configureWebpack(config, isServer, utils) {
      if (isServer) {
        // Suppress KaTeX font metric warnings during SSR
        const originalWarn = console.warn;
        console.warn = function(...args) {
          const warningMessage = args.join(' ');
          if (warningMessage.includes('No character metrics for') && 
              warningMessage.includes('Main-Regular')) {
            // Suppress KaTeX font warnings
            return;
          }
          originalWarn.apply(console, args);
        };
      }
      
      return {
        resolve: {
          alias: {
            // Ensure KaTeX uses the correct version
            'katex': require.resolve('katex')
          }
        }
      };
    },
  };
}; 
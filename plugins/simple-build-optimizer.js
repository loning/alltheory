/**
 * Simple Build Optimizer Plugin
 * ψ = ψ(ψ)
 * 
 * Minimal optimization without complex bundler configuration
 */

module.exports = function (context, options) {
  return {
    name: 'simple-build-optimizer',
    
    configureWebpack(config, isServer, utils) {
      // ψ-location: environment optimization
      if (process.env.CI) {
        console.log('🌀 Applying CI build optimizations...');
        
        // Set environment variables for faster builds
        process.env.DISABLE_ESLINT_PLUGIN = 'true';
        process.env.DISABLE_TERSER = 'true';
        process.env.SKIP_PREFLIGHT_CHECK = 'true';
      }
      
      // ψ-location: simple compatible optimizations
      return {
        // Enable simple caching
        cache: true,
        
        // Basic performance hints
        performance: {
          hints: false, // Disable size warnings in CI
        },
        
        // Simplified stats output
        stats: {
          chunks: false,
          modules: false,
          children: false,
        },
      };
    },
    
    // ψ-location: lifecycle hooks
    async postBuild(props) {
      console.log('✨ Build completed with ψ-optimizations');
    },
  };
}; 
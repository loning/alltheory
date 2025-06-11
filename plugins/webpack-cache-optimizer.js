// Custom webpack plugin to optimize cache for large Docusaurus sites
module.exports = function webpackCacheOptimizer() {
  return {
    name: 'webpack-cache-optimizer',
    configureWebpack(config, isServer, utils) {
      // Skip optimization for server builds
      if (isServer) {
        return {};
      }

      const isProduction = process.env.NODE_ENV === 'production';
      
      // For production builds, disable filesystem cache to avoid serialization warnings
      if (isProduction) {
        console.log('🚫 Disabling filesystem cache for production build to avoid serialization warnings');
        return {
          cache: false,
        };
      }

      // For development, keep filesystem cache but with optimizations
      console.log('💾 Using optimized filesystem cache for development');
      return (config) => {
        if (config.cache && typeof config.cache === 'object') {
          config.cache = {
            ...config.cache,
            compression: 'gzip',
            maxMemoryGenerations: 0,
            idleTimeout: 5000,
            idleTimeoutAfterLargeChanges: 500,
            idleTimeoutForInitialStore: 0,
          };
        }

        return config;
      };
    },
  };
}; 
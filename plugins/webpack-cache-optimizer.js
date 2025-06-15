/**
 * Webpack Cache Optimizer Plugin
 * ψ = ψ(ψ)
 * 
 * Implements φ-structured caching and parallel optimization
 */

module.exports = function (context, options) {
  return {
    name: 'webpack-cache-optimizer',
    
    configureWebpack(config, isServer, utils) {
      // ψ-location: cache configuration
      const cacheConfig = {
        type: 'filesystem',
        cacheDirectory: '.webpack-cache',
        compression: 'gzip',
        hashAlgorithm: 'xxhash64',
        name: `${isServer ? 'server' : 'client'}-${process.env.NODE_ENV}`,
        version: '1.0.0',
      };
      
      // ψ-location: parallel processing
      const parallelConfig = {
        parallel: true,
        parallelism: 4, // φ-aligned parallelism
      };
      
      return {
        cache: cacheConfig,
        
        optimization: {
          ...config.optimization,
          ...parallelConfig,
          moduleIds: 'deterministic',
          runtimeChunk: {
            name: 'runtime',
          },
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              // ψ-collapse: vendor splitting
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: 10,
                reuseExistingChunk: true,
              },
              // ψ-collapse: commons extraction
              common: {
                minChunks: 2,
                priority: 5,
                reuseExistingChunk: true,
              },
            },
          },
        },
        
        performance: {
          maxAssetSize: 512000, // 500KB
          maxEntrypointSize: 512000,
          hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
        },
        
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'thread-loader',
                  options: {
                    workers: 4, // φ-aligned workers
                    poolTimeout: 2000,
                  },
                },
                {
                  loader: 'babel-loader',
                  options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                  },
                },
              ],
            },
          ],
        },
      };
    },
  };
}; 
module.exports = function (context, options) {
  return {
    name: 'docusaurus-plugin-swc-loader',
    configureWebpack(config, isServer, utils) {
      // Log build start for performance measurement
      if (!global.swcBuildStartTime) {
        global.swcBuildStartTime = Date.now();
        console.log('[SWC] Build started with SWC loader');
      }
      
      // Find and remove babel-loader rules
      const jsRuleIndex = config.module.rules.findIndex(rule => 
        rule.test && rule.test.toString().includes('jsx')
      );
      
      if (jsRuleIndex !== -1) {
        // Replace the existing JS/TS rule with SWC loader
        config.module.rules[jsRuleIndex] = {
          test: /\.(jsx?|tsx?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: require.resolve('swc-loader'),
              options: {
                jsc: {
                  parser: {
                    syntax: 'typescript',
                    tsx: true,
                    decorators: false,
                    dynamicImport: true
                  },
                  transform: {
                    react: {
                      runtime: 'automatic',
                      development: !isServer && process.env.NODE_ENV === 'development',
                      refresh: !isServer && process.env.NODE_ENV === 'development'
                    }
                  },
                  target: 'es2017'
                },
                module: {
                  type: isServer ? 'commonjs' : 'es6'
                }
              }
            }
          ]
        };
      }
      
      // Add build completion logging
      const progressPlugin = config.plugins.find(
        plugin => plugin.constructor.name === 'ProgressPlugin'
      );
      
      if (progressPlugin) {
        const originalHandler = progressPlugin.handler;
        progressPlugin.handler = (percentage, message, ...args) => {
          if (originalHandler) {
            originalHandler(percentage, message, ...args);
          }
          if (percentage === 1 && global.swcBuildStartTime) {
            const duration = Date.now() - global.swcBuildStartTime;
            console.log(`[SWC] Build completed in ${(duration / 1000).toFixed(2)}s`);
            delete global.swcBuildStartTime;
          }
        };
      }
      
      return {};
    }
  };
}; 
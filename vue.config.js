// eslint-disable-next-line @typescript-eslint/no-var-requires
const swConfig = require('./build/sw-precache');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GenerateSW } = require('workbox-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const TerserPlugin = require('terser-webpack-plugin');

const BASE_URL = process.env.NODE_ENV === 'production' ? '/main-app' : '/main-app';
module.exports = {
    publicPath: BASE_URL,
    lintOnSave: true,
    assetsDir: './static',
    configureWebpack:
        process.env.NODE_ENV === 'production'
            ? {
                  optimization: {
                      minimizer: [
                          new TerserPlugin({
                              cache: true,
                              parallel: true,
                              terserOptions: {
                                  compress: {
                                      drop_console: true,
                                      drop_debugger: true
                                  }
                              }
                          })
                      ]
                  },
                  plugins: [new GenerateSW(swConfig)]
              }
            : {
                  plugins: [new GenerateSW(swConfig)]
              }
};

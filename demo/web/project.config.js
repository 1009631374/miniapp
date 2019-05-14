module.exports = {
  // Do not change or delete this property, It is useful for platform packing system.
  lib: 'react',
  // DevServer default configuration for webpack-dev-server
  devServer: {
    host: 'localhost',
    port: 8080,
    publicPath: '/'
  },
  // Page entry config for webpack entry
  pages: [{
    entry: {
      pc: './src/app.js'
    },
    template: './pc.html'
  }, {
    entry: {
      web: './src/app.js'
    },
    template: './web.html'
  }]
}

const packageName = require('./package.json').name;

module.exports = {
  publicPath: '/app2/',
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
    },
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    }
  },
  devServer: {
    port: 8200,
    historyApiFallback: {
      index: '/app2/'
    }
  }
}

const packageName = require('./package.json').name;

module.exports = {
  publicPath: '/app1/',
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
    port: 8100,
    historyApiFallback: {
      index: '/app1/'
    }
  }
}

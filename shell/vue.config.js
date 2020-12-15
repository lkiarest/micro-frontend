module.exports = {
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    }
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/app1': {
        target: 'http://localhost:8100',
        changeOrigin: true
      },
      '/app2': {
        target: 'http://localhost:8200',
        changeOrigin: true
      }
    },
  }
}

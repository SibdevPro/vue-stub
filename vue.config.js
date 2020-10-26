module.exports = {
  lintOnSave: true,
  devServer: {
    open: true,
    watchOptions: {
      poll: true
    }
    // Configure proxy, more: https://github.com/chimurai/http-proxy-middleware#http-proxy-options
    // proxy: 'http://localhost:1337/'
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/assets/scss/vars";'
      }
    }
  }
}

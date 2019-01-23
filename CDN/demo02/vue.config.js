module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/demo02/'
    : '/',
  chainWebpack: config => {
    config
      .externals({
        'vue':'Vue',
        'vuex':'Vuex',
        'vue-router':'VueRouter'
      })
  }
}

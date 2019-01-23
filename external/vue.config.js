module.exports = {
  lintOnSave: false,
  devServer:{
    open:true
  }
  chainWebpack:config => {
    config
    .externals({
      'vue':'Vue',
      'vuex':'Vuex',
      'vue-router':'VueRouter'
    })
  }
}

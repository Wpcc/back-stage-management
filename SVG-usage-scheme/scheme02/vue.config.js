const path = require('path')
function resolve(dir){
  return path.resolve(__dirname,dir)
}
module.exports = {
  lintOnSave: false,
  chainWebpack: config => {
    //更改原来的svg配置处理loader
    const svgRule = config.module.rule('svg')

    svgRule
    .exclude
      .add(resolve('src/icons'))
      .end()

    //添加新的svg配置处理loader
      config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
        .add(resolve('src/icons'))
        .end()
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId:'icon-[name]'
          })
  }
}

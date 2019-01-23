const path = require('path')
function resolve(dir){
  return path.resolve(__dirname,dir)
}
module.exports = {
  devServer: {
    open:true,
    host:'localhost',
    port:9528
  },
  //由于我的项目并不是直接放在根目录中，故更改打包后的资源链接
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  chainWebpack: config => {
    // 添加包分析插件 webpack-bundle-analyzer
    if (process.env.NODE_ENV === 'production'){
      if (process.env.npm_lifecycle_event === 'analyze'){
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
      }
    }

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

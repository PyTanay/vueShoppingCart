const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
      .plugin('eslint')
      .tap(args => {
        args[0].fix = true
        return args
      })
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vueShoppingCart/'
    : '/'
})

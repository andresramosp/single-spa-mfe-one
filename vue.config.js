const { defineConfig } = require('@vue/cli-service')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: { port: 9999 },
  configureWebpack: {
    output: {
      libraryTarget: 'system'
    },
    externals: [
      'element-plus',
      'vue',
      'moment'
    ],
    // plugins: [
    //   AutoImport({
    //     resolvers: [ElementPlusResolver()],
    //   }),
    //   Components({
    //     resolvers: [ElementPlusResolver()],
    //   }),
    // ],
  }
})

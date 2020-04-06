module.exports = {
  assetsDir: 'static',
  pluginOptions: {
    quasar: {
      rtlSupport: true,
      treeShake: true
    }
  },
  transpileDependencies: [
    /[\\\/]node_modules[\\\/]quasar[\\\/]/
  ]
}

module.exports = api => {
  api.chainWebpack(webpackConfig => {
    webpackConfig.plugin('stylelint')
      .use(require('stylelint-webpack-plugin'), [{
        context: 'src',
        files: ['**/*.css', '**/*.vue']
      }])
  })
}

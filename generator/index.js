module.exports = api => {
  api.extendPackage({
    devDependencies: {
      '@mapbox/stylelint-processor-arbitrary-tags': '^0.2.0',
      'stylelint': '^8.4.0',
      'stylelint-config-standard': '^18.0.0',
    }
  })

  api.render('./template')
}

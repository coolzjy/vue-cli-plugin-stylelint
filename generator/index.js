const configs = {
  'stylelint-config-recommended': '^2.1.0',
  'stylelint-config-standard': '^18.1.0'
}

module.exports = (api, options) => {
  const devDependencies = {
    '@mapbox/stylelint-processor-arbitrary-tags': '^0.2.0',
    'stylelint': '^8.4.0'
  }

  const config = options.config

  if (config) {
    devDependencies[config] = configs[config]
  }

  api.extendPackage({
    devDependencies
  })

  if (options.override !== false) {
    api.render('./template', options)
  }
}

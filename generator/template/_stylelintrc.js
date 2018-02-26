module.exports = {
  processors: [
    [
      '@mapbox/stylelint-processor-arbitrary-tags',
      {
        fileFilterRegex: [/\.vue$/]
      }
    ]
  ]<% if (config) { %>,
  extends: ['<%- config %>']<% } %>
}

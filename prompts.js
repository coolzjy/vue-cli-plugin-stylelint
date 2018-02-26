const fs = require('fs')

const questions = [
  {
    type: 'list',
    name: 'config',
    message: 'Choose a configuration to extend',
    choices: [
      {
        name: 'none',
        value: ''
      },
      'stylelint-config-recommended',
      'stylelint-config-standard'
    ]
  }
]

let status

try {
  status = fs.statSync('./.stylelintrc.js')
} catch (e) {}

if (status) {
  questions.push({
    type: 'confirm',
    name: 'override',
    message: 'Stylelint config file(.stylelint.js) already exist, override it?',
    default: false
  })
}


module.exports = questions

const inquirer = require('inquirer')

inquirer.prompt([
    {
        type: 'imput',
        name: 'name',
        message: 'What is your name?'
    }
]).then(answers => console.log(answers))
// const fs = require('fs')
// const generatePage = require('./src/page-template.js')

// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err
  
//   console.log('Complete ')
// })

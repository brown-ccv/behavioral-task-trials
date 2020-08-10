const jsdoc2md = require('jsdoc-to-markdown')
const fs = require('fs')
const title = `# Behavioral Task Trials
All-in-one starter app with behavioral task trials
`
jsdoc2md.render({ files: '**/trials/**.js' }).then(output => fs.writeFile('Documentation.md', title+output, function(err, result) {
    if(err) console.log('error', err);
  }))
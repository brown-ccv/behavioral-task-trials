const { config } = require('../app')
const { photodiodeGhostBox } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')


var defaultname = "Task Name";
var defaultbutton = "Continue";


module.exports = 
  function(taskname = defaultname, buttontext = defaultbutton) {
    let stimulus = baseStimulus(`<h1>${taskname}</h1>`, true) 
    if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();
    return {
      type: 'html_button_response',
      stimulus: stimulus,
      choices: [buttontext]
    }
  }


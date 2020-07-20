const { config } = require('../app')
const { photodiodeGhostBox } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')


var defaultmessage = "This experiment has ended.";


module.exports = 
  function(duration, endmessage=defaultmessage) {
  let stimulus = baseStimulus(`<h1>${endmessage}</h1>`, true)
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

  return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    trial_duration: duration
  }
}


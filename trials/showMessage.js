const { photodiodeGhostBox, pdSpotEncode } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')


const defaultmessage = "Default message";
const defaultbuttons = [];

module.exports = 
  function(duration, config, message = defaultmessage, responseEndsTrial = false, taskCode = null, buttons = defaultbuttons, numBlinks = 1) {
  let stimulus = baseStimulus(`<h1>${message}</h1>`, true)
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

  return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    trial_duration: duration,
    response_ends_trial: responseEndsTrial,
    choices: buttons,
    on_load: ()=> pdSpotEncode(taskCode, numBlinks),
    on_finish: (data) => data.taskCode = taskCode
  }
}


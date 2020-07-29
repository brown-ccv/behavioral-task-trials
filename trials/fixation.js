const { pdSpotEncode, photodiodeGhostBox } = require('../lib/markup/photodiode')

const defaultbuttons = [];

module.exports = function(duration, config, responseEndsTrial = false, taskCode = null, numBlinks = 1, buttons = defaultbuttons) {
  const jitter = (base, offset) => (
    base + Math.floor(Math.random() * Math.floor(offset))
  )
  const jitter50 = (base) => jitter(base, 50)
  
  let stimulus = '<div class="beads_container"><div id="fixation-dot"> </div></div>' 
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

  return {
    type: 'html_keyboard_response',
    choices: buttons,
    stimulus: stimulus,
    response_ends_trial: responseEndsTrial,
    trial_duration: jitter50(duration),
    on_load: () => pdSpotEncode(taskCode, numBlinks),
    on_finish: (data) => data.taskCode = taskCode
  }
}


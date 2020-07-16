const { photodiodeGhostBox } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')
var endmessage = "This experiment has ended.";
module.exports = function(duration, endmessage) {
  let stimulus = baseStimulus(`<h1>${endmessage}</h1>`, true) + photodiodeGhostBox()

   return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    trial_duration: duration
  }
}


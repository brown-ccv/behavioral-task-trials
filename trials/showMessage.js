const { photodiodeGhostBox, pdSpotEncode } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')


const message = "This experiment has ended.";
const buttons = [];

module.exports = 
  function(_duration, config, _message = message, _responseEndsTrial = false, _taskCode = null, _buttons = buttons, _numBlinks = 1) {
  let stimulus = baseStimulus(`<h1>${_message}</h1>`, true)
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

  return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    trial_duration: _duration,
    response_ends_trial: _responseEndsTrial,
    choices: _buttons,
    on_load: ()=> pdSpotEncode(_taskCode, _numBlinks),
    on_finish: (data) => data.taskCode = _taskCode
  }
}


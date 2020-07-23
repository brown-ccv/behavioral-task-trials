const { config } = require('../app')
const { photodiodeGhostBox, pdSpotEncode } = require('../lib/markup/photodiode')



module.exports = function(_duration, _responseEndsTrial = false, _taskCode = null, _numBlinks = 1) {
  let earnings = '$' + parseFloat(Math.random()).toFixed(2)
  const bclass = (earnings >= 0) ? 'success' : 'danger'
  let stimulus = `<div class='beads_container'>
    <h1 class='text-${bclass}'>${earnings}</h1>
    </div>`;
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

    return {
      type: 'html_keyboard_response',
      stimulus: stimulus,
      response_ends_trial: _responseEndsTrial,
      trial_duration: _duration,
      on_load: () => pdSpotEncode(_taskCode, _numBlinks),
      on_finish: (data) => data.code = _taskCode
    }
}


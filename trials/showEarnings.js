const { photodiodeGhostBox, pdSpotEncode } = require('../lib/markup/photodiode')



module.exports = function(duration, config, earnings = Math.random(), responseEndsTrial = false, taskCode = null, numBlinks = 1) {
  let dollarearnings = '$' + parseFloat(earnings).toFixed(2)
  const bclass = (earnings >= 0) ? 'success' : 'danger'
  let stimulus = `<div class='beads_container'>
    <h1 class='text-${bclass}'>${dollarearnings}</h1>
    </div>`;
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

    return {
      type: 'html_keyboard_response',
      stimulus: stimulus,
      response_ends_trial: responseEndsTrial,
      trial_duration: duration,
      on_load: () => pdSpotEncode(taskCode, numBlinks),
      on_finish: (data) => data.code = taskCode
    }
}


const { photodiodeGhostBox, pdSpotEncode } = require('../lib/markup/photodiode')

/**
 * Builds a trial which shows formatted dollar earnings(number) with optional photodiode box.
 * @module
 * @param {number} duration - The trial duration in milliseconds.
 * @param {object} config - The configuration object for USE_PHOTODIODE, USE_EEG, IS_ELECTRON and USE_MTURK flags.
 * @param {number} earnings - The float earnings to display on screen. If not set,  default is random float.
 * @param {boolean} responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {number} taskCode - The task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true.
 * @param {number} numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1.
 */

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
      on_load: () => (taskCode!=null)?pdSpotEncode(taskCode, numBlinks, config):null,
      on_finish: (data) => (taskCode!=null)?data.code = taskCode:null
    }
}


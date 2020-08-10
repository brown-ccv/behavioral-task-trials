const { pdSpotEncode, photodiodeGhostBox } = require('../lib/markup/photodiode')
const { jitter50 } = require('../lib/utils')

/**
 * Builds a trial with a fixation dot and optional photodiode box.
 * @module
 * @param {string} responseType - This tells jsPsych which plugin file to use to run the trial. 
 * @param {number} duration - The trial duration in milliseconds.
 * @param {object} config - The configuration object for USE_PHOTODIODE, USE_EEG, IS_ELECTRON and USE_MTURK flags.
 * @param {boolean} responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {number} taskCode - Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true.
 * @param {number} numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1.
 * @param {any} buttons - This array contains the keys that the subject is allowed to press in order to respond to the stimulus. Keys can be specified as their numeric key code or as characters (e.g., 'a', 'q'). The default value of jsPsych.ALL_KEYS means that all keys will be accepted as valid responses. Specifying jsPsych.NO_KEYS will mean that no responses are allowed.
 */

module.exports = function(responseType, duration, config, responseEndsTrial = false, taskCode = null, numBlinks = 1, buttons) {
  
  let stimulus = '<div class="beads_container"><div id="fixation-dot"> </div></div>' 
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

  return {
    type: responseType,
    choices: buttons,
    stimulus: stimulus,
    response_ends_trial: responseEndsTrial,
    trial_duration: jitter50(duration),
    on_load: () =>(taskCode!=null)? pdSpotEncode(taskCode, numBlinks, config):null,
    on_finish: (data) => (taskCode!=null)? data.code = taskCode:null
  }
}


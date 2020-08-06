const { pdSpotEncode, photodiodeGhostBox } = require('../lib/markup/photodiode')

/**
 * Builds a trial with a fixation dot and optional photodiode box.
 * @module
 * @param {number} duration - The trial duration in milliseconds.
 * @param {object} config - The configuration object for USE_PHOTODIODE, IS_ELECTRON and USE_MTURK flags.
 * @param {boolean} responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {number} taskCode - Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true.
 * @param {number} numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1.
 * @param {any} buttons - This array contains the keys that the subject is allowed to press in order to respond to the stimulus. Keys can be specified as their numeric key code or as characters (e.g., 'a', 'q'). The default value of jsPsych.ALL_KEYS means that all keys will be accepted as valid responses. Specifying jsPsych.NO_KEYS will mean that no responses are allowed.
 */

module.exports = function(duration, config, responseEndsTrial = false, taskCode = null, numBlinks = 1, buttons) {
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
    on_load: () =>(taskCode!=null)? pdSpotEncode(taskCode, numBlinks, config):null,
    on_finish: (data) => (taskCode!=null)? data.code = taskCode:null
  }
}


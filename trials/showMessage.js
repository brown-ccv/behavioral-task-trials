const { photodiodeGhostBox, pdSpotEncode } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')

/**
 * Builds a trial with a onscreen message, optional buttons and optional phtodiode box
 * @module
 * @param {number} duration - The trial duration in milliseconds.
 * @param {object} config - The configuration object for USE_PHOTODIODE, USE_EEG, IS_ELECTRON and USE_MTURK flags.
 * @param {string} message - Onscreen message to be shown in the trial, if not set default text is empty.
 * @param {boolean} responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {number} taskCode - Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true.
 * @param {number} numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1.
 * @param {Array} buttons - This array contains the keys that the subject is allowed to press in order to respond to the stimulus. Keys can be specified as their numeric key code or as characters (e.g., 'a', 'q'). The default value of jsPsych.ALL_KEYS means that all keys will be accepted as valid responses. Specifying jsPsych.NO_KEYS will mean that no responses are allowed. If not set, by default is empty array.
 */


module.exports = 
  function(duration, config, message = "", responseEndsTrial = false, taskCode = null, numBlinks = 1, buttons = []) {
  let stimulus = baseStimulus(`<h1>${message}</h1>`, true)
  if(config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

  return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    trial_duration: duration,
    response_ends_trial: responseEndsTrial,
    choices: buttons,
    on_load: () => (taskCode!=null)?pdSpotEncode(taskCode, numBlinks, config):null,
    on_finish: (data) => (taskCode!=null)?data.code = taskCode:null
  }
}


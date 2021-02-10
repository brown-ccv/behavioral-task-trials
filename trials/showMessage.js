const {
  photodiodeGhostBox,
  pdSpotEncode,
} = require("../lib/markup/photodiode");
const { baseStimulus } = require("../lib/markup/stimuli");

/**
 * @description
 * Builds a trial with a onscreen message, optional buttons and optional photodiode box
 *
 * @module
 * @param {Object} config - The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags.
 * @param {boolean} config.USE_PHOTODIODE - USE_PHOTODIODE flag
 * @param {boolean} config.USE_EEG - USE_EEG flag
 * @param {boolean} config.USE_ELECTRON - USE_ELECTRON flag
 * @param {boolean} config.USE_MTURK - USE_MTURK flag
 * @param {Object} options
 * @param {string} options.responseType - This tells jsPsych which plugin file to use to run the trial.
 * @param {number} options.duration - The trial duration in milliseconds.
 * @param {HTML string} options.stimulus - Onscreen stimulus in HTML to be shown in the trial, if not set default text is empty. If the stimulus is not provided, message should be provided as a string.
 * @param {string} options.message - Onscreen message to be shown in the trial, if not set default text is empty.
 * @param {boolean} options.onstart - True if the message is to be display on start of the trial. False if the message needs to be in the stimulus.(default: false)
 * @param {boolean} options.responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {number} options.taskCode - Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true.
 * @param {number} options.numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1.
 * @param {Array} options.buttons - This array contains the keys that the subject is allowed to press in order to respond to the stimulus. Keys can be specified as their numeric key code or as characters (e.g., 'a', 'q'). The default value of jsPsych.ALL_KEYS means that all keys will be accepted as valid responses. Specifying jsPsych.NO_KEYS will mean that no responses are allowed.
 */

module.exports = function (config, options) {
  const defaults = {
    message: "",
    stimulus: "",
    onstart: false,
    responseEndsTrial: false,
    taskCode: null,
    numBlinks: 1,
  };
  const {
    responseType,
    duration,
    message,
    stimulus,
    onstart,
    responseEndsTrial,
    taskCode,
    numBlinks,
    buttons,
  } = { ...defaults, ...options };

  let stimulusOrMessage =
    message !== ""
      ? onstart
        ? baseStimulus(`<h1>${message}</h1>`, true, true)
        : baseStimulus(`<h1>${message}</h1>`, true)
      : stimulus;
  if (config.USE_PHOTODIODE) stimulusOrMessage += photodiodeGhostBox();

  return {
    type: responseType,
    stimulus: !onstart ? stimulusOrMessage : "",
    trial_duration: duration,
    response_ends_trial: responseEndsTrial,
    choices: buttons,
    on_start: (trial) => {
      onstart ? (trial.stimulus = stimulusOrMessage) : "";
    },
    on_load: () =>
      taskCode != null ? pdSpotEncode(taskCode, numBlinks, config) : null,
    on_finish: (data) => (taskCode != null ? (data.code = taskCode) : null),
  };
};

const {
  pdSpotEncode,
  photodiodeGhostBox,
} = require("../lib/markup/photodiode");
const { jitter50 } = require("../lib/utils");

/**
 * @description
 * Builds a trial with a fixation dot and optional photodiode box.
 *
 * @module
 * @param {Object} config - The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags.
 * @param {boolean} config.USE_PHOTODIODE - USE_PHOTODIODE flag
 * @param {boolean} config.USE_EEG - USE_EEG flag
 * @param {boolean} config.USE_ELECTRON - USE_ELECTRON flag
 * @param {boolean} config.USE_MTURK - USE_MTURK flag
 * @param {Object} options
 * @param {number} options.duration - trial duration in milliseconds. (default: 1000)
 * @param {number} options.taskCode - Task code to be saved into data log (default: 1)
 * @param {number} options.numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. (default: 1)
 */

module.exports = function (config, options) {
  const defaults = {
    duration: 1000,
    taskCode: 1,
    numBlinks: 1,
  };
  const { duration, taskCode, numBlinks } = {
    ...defaults,
    ...options,
  };

  let stimulus =
    '<div class="center_container"><div id="fixation-dot"> </div></div>';
  if (config.USE_PHOTODIODE) stimulus += photodiodeGhostBox();

  return {
    type: "html_keyboard_response",
    stimulus: stimulus,
    response_ends_trial: false,
    trial_duration: jitter50(duration),
    on_load: () => pdSpotEncode(taskCode, numBlinks, config),
    on_finish: (data) => (data.code = taskCode),
  };
};

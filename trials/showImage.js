const {
  photodiodeGhostBox,
  pdSpotEncode,
} = require("../lib/markup/photodiode");
const $ = require("jquery");
const { jitter50 } = require("../lib/utils");

/**
 * @description
 * Builds a trial with a onscreen message, optional buttons and optional phtodiode box
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
 * @param {string} options.image - The path of the image file to be displayed.
 * @param {number} options.imageHeight - Set the height of the image in pixels. If left null (no value specified), then the image will display at its natural height.
 * @param {number} options.imageWidth - Set the width of the image in pixels. If left null (no value specified), then the image will display at its natural width.
 * @param {boolean} options.responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {number} options.taskCode - Task code to be saved into data log and for pdSpotEncode, which by default is null and is passed when config has USE_PHOTODIODE set true.
 * @param {number} options.numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. If not set, by default is 1.
 */

module.exports = function (config, options) {
  const defaults = {
    responseEndsTrial: false,
    taskCode: null,
    numBlinks: 1,
  };
  const {
    responseType,
    duration,
    image,
    imageHeight,
    imageWidth,
    responseEndsTrial,
    taskCode,
    numBlinks,
  } = { ...defaults, ...options };

  return {
    type: responseType,
    stimulus: image,
    prompt: config.USE_PHOTODIODE ? photodiodeGhostBox() : null,
    response_ends_trial: responseEndsTrial,
    trial_duration: jitter50(duration),
    on_load: () => {
      $("#jspsych-image-keyboard-response-stimulus").addClass("image");
      $("#jspsych-image-keyboard-response-stimulus").height(imageHeight);
      $("#jspsych-image-keyboard-response-stimulus").width(imageWidth);
      $("html").css("cursor", "none")(taskCode != null)
        ? pdSpotEncode(taskCode, numBlinks, config)
        : null;
    },
    on_finish: (data) => {
      data.code = code;
      $("html").css("cursor", "auto");
    },
  };
};

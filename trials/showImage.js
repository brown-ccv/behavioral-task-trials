import imageKeyboardResponse from "@jspsych/plugin-image-keyboard-response"
import {
  photodiodeGhostBox,
  pdSpotEncode,
} from "../lib/markup/photodiode"
import $ from "jquery"
import { jitterx } from "../lib/utils"

/**
 * @description
 * Builds a trial with a onscreen message and optional photodiode box
 *
 * @module
 * @param {Object} config - The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags.
 * @param {boolean} config.USE_PHOTODIODE - USE_PHOTODIODE flag
 * @param {boolean} config.USE_EEG - USE_EEG flag
 * @param {boolean} config.USE_ELECTRON - USE_ELECTRON flag
 * @param {boolean} config.USE_MTURK - USE_MTURK flag
 * @param {string} image - The path of the image file to be displayed.
 * @param {Object} options
 * @param {number} options.duration - trial duration in milliseconds jittered with the jitter param. (default: 1000)
 * @param {number} options.jitter - jitter range (0-jitter) to add from to the trial duration (default: 50)
 * @param {number} options.imageHeight - Set the height of the image in pixels. (default: 600)
 * @param {number} options.imageWidth - Set the width of the image in pixels. (default: 600)
 * @param {number} options.taskCode - Task code to be saved into data log (default: 1)
 * @param {number} options.numBlinks - Number of times the pulse needs to be repeated for photodiode box, when USE_PHOTODIODE is set true. (default: 1)
 */
export function showImage(config, image, options) {
  const defaults = {
    duration: 1000,
    jitter: 50,
    imageHeight: 600,
    imageWidth: 600,
    taskCode: 1,
    numBlinks: 1,
  };
  const {
    duration,
    jitter,
    imageHeight,
    imageWidth,
    taskCode,
    numBlinks,
  } = { ...defaults, ...options };

  return {
    type: imageKeyboardResponse,
    stimulus: image,
    prompt: config.USE_PHOTODIODE ? photodiodeGhostBox() : "",
    response_ends_trial: false,
    trial_duration: jitterx(duration, jitter),
    on_load: () => {
      $("#jspsych-image-keyboard-response-stimulus").addClass("image");
      $("#jspsych-image-keyboard-response-stimulus").height(imageHeight);
      $("#jspsych-image-keyboard-response-stimulus").width(imageWidth);
      $("html").css("cursor", "none");
      pdSpotEncode(taskCode, numBlinks, config);
    },
    on_finish: (data) => {
      data.code = taskCode;
      $("html").css("cursor", "auto");
    },
  };
};

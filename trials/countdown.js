import { range } from "lodash";
import htmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";

/**
 * @description
 * Builds a countdown transition with the given message and number of seconds.
 *
 * @module
 * @param {Object} options
 * @param {number} options.duration - trial duration in milliseconds. (default: 1000)
 * @param {string} options.stimulus - Onscreen stimulus in HTML to be shown in the trial. If the stimulus is not provided, message should be provided as a string. (default: "")
 * @param {string} options.message - (optional) message for the countdown. (default: "")
 * @param {number} options.time - start number for the countdown. (default: 3)
 */
export function countdown(options) {
  const defaults = {
    duration: 1000,
    stimulus: "",
    message: "",
    time: 3,
  };
  const { duration, message, stimulus, time } = { ...defaults, ...options };

  const stimulusOrMessage = message !== "" ? `<h3>${message}</h3>` : stimulus;
  const times = range(time, 0, -1);
  const timeline = times.map((val) => {
    return { prompt: `<h1>${val}</h1>` };
  });

  return {
    type: htmlKeyboardResponse,
    stimulus: stimulusOrMessage,
    trial_duration: duration,
    response_ends_trial: false,
    timeline: timeline,
  };
};

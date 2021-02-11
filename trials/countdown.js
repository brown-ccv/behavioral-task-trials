const _ = require("lodash");

/**
 * @description
 * Builds a countdown transition with the given text and number of seconds.
 *
 * @module
 * @param {Object} options
 * @param {number} options.duration - trial duration in milliseconds. (default: 1000)
 * @param {string} options.text - (optional) text for the countdown. (default: "")
 * @param {number} options.time - start number for the countdown. (default: 3)
 */

module.exports = function (options) {
  const defaults = {
    duration: 1000,
    text: "",
    time: 3,
  };
  const { duration, text, time } = { ...defaults, ...options };
  const times = _.range(time, 0, -1);
  const timeline = times.map((val) => {
    return { prompt: `<h1>${val}</h1>` };
  });

  return {
    type: "html_keyboard_response",
    stimulus: `<h3>${text}</h3`,
    trial_duration: duration,
    response_ends_trial: false,
    timeline: timeline,
  };
};

const _ = require("lodash");

/**
 * @description
 * Builds a countdown transition with the given text and number of seconds.
 *
 * @module
 * @param {Object} options
 * @param {number} options.duration - The trial duration.
 * @param {string} options.text - Optional text for the countdown. (default: "")
 * @param {number} options.time - The number of seconds for the countdown. (default: 10s)
 * @param {boolean} options.responseEndsTrial - True if the trial ends on response, false if the trial waits for the duration. (default: false)
 */

module.exports = function (options) {
  const defaults = {
    text: "",
    time: 10,
    responseEndsTrial: false,
  };
  const { duration, text, time, responseEndsTrial } = { defaults, ...options };
  const times = _.range(time, 0, -1);
  const timeline = times.map((val) => {
    return { prompt: `<h1>${val}</h1>` };
  });

  return {
    type: "html_keyboard_response",
    stimulus: `<h3>${text}</h3`,
    trial_duration: duration,
    response_ends_trial: responseEndsTrial,
    timeline: timeline,
  };
};

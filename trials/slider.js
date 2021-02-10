/**
 * @description
 * Builds a trial with a onscreen message and allows the subject to respond by dragging a slider.
 * @module
 * @param {Object} options
 * @param {string} options.message - The string to be displayed (default: empty string)
 * @param {boolean} options.requireMovement - If true, the subject must move the slider before clicking the continue button. (default: false)
 * @param {string} options.uniqueId - Unique participant id to be saved into data log
 */

module.exports = function (options) {
  const defaults = {
    requireMovement: false,
    message: "",
  };
  const { requireMovement, message, uniqueId } = { ...defaults, ...options };

  return {
    type: "html_slider_response",
    require_movement: requireMovement,
    stimulus: message,
    on_finish: (data) => {
      data.uniqueId = uniqueId;
      data.prompt = [message];
      data.answer = [data.response];
    },
  };
};

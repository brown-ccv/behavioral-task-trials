import htmlSliderResponse from "@jspsych/plugin-html-slider-response"

/**
 * @description
 * Builds a trial with a onscreen message and allows the subject to respond by dragging a slider.
 * @module
 * @param {string} message - The string to be displayed, this can be formatted as an HTML string. (default: empty string)
 */
export function slider(message = "") {
  return {
    type: htmlSliderResponse,
    require_movement: true,
    stimulus: message,
    on_finish: (data) => {
      data.prompt = [message];
      data.answer = [data.response];
    },
  };
};

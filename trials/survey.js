/**
 * @description
 * Builds a trial with a question and with free response text fields. The subject types in answers.
 * @module
 * @param {string} message - A string to be displayed as the question. This can be formatted as an HTML string. (default: "")
 */

module.exports = function (message = "") {
  return {
    type: "survey_text",
    questions: [{ prompt: baseStimulus(message), required: true }],
    on_finish: (data) => {
      data.prompt = [message];
      data.answer = JSON.parse(data.responses)["Q0"];
    },
  };
};

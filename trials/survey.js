const { baseStimulus } = require("../lib/markup/stimuli");

/**
 * @description
 * Builds a trial with a question and with free response text fields. The subject types in answers.
 * @module
 * @param {Object} options
 * @param {string} options.stimulus - Onscreen stimulus in HTML to be shown in the trial, if not set default text is empty. If the stimulus is not provided, message should be provided as a string. (default: "")
 * @param {string} options.message - Onscreen message to be shown in the trial. (default: "")
 */

module.exports = function (options) {
  const defaults = {
    stimulus: "",
    message: "",
  };
  const { stimulus, message } = { ...defaults, ...options };

  const stimulusOrMessage =
    message !== "" ? baseStimulus(`<h1>${message}</h1>`, true) : stimulus;

  return {
    type: "survey_text",
    questions: [{ prompt: stimulusOrMessage, required: true }],
    on_finish: (data) => {
      data.prompt = [stimulusOrMessage];
      data.answer = JSON.parse(data.responses)["Q0"];
    },
  };
};

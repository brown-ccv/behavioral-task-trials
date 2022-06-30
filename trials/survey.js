import surveyText from "@jspsych/plugin-survey-text"
import { baseStimulus } from "../lib/markup/stimuli"

/**
 * @description
 * Builds a trial with a question and with free response text fields. The subject types in answers.
 * @module
 * @param {Object} options
 * @param {string} options.preamble - HTML formatted string to display at the top of the page above all the questions. (default: "")
 * @param {string} options.stimulus - Onscreen stimulus in HTML to be shown in the trial, if not set default text is empty. If the stimulus is not provided, message should be provided as a string. (default: "")
 * @param {string} options.message - Onscreen message to be shown in the trial. (default: "")
 */

export function survey(options) {
  const defaults = {
    preamble: "",
    stimulus: "",
    message: "",
  };
  const { preamble, stimulus, message } = { ...defaults, ...options };

  const stimulusOrMessage =
    message !== "" ? baseStimulus(`<h1>${message}</h1>`, true) : stimulus;

  return {
    type: surveyText,
    preamble: preamble,
    questions: [{ prompt: stimulusOrMessage, required: true }],
    on_finish: (data) => {
      window.scrollTo(0, 0);
      data.prompt = [stimulusOrMessage];
      data.answer = data.response["Q0"];
    },
  };
};

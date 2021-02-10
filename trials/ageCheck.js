/**
 * @description
 * Builds a trial with a set of questions with free response text fields. The subject types in answers.
 * @module
 * @param {Object} options
 * @param {string} options.question - A string to be displayed as the question. This can be formatted as an HTML string.
 * @param {string} options.uniqueId - Unique participant id to be saved into data log
 */

module.exports = function (options) {
  const defaults = {
    question: "",
    required: false,
  };
  const { question, required, uniqueId } = { ...defaults, ...options };

  return {
    type: "survey_text",
    questions: [{ prompt: baseStimulus(question), required: required }],
    on_finish: (data) => {
      data.uniqueId = uniqueId;
      data.prompt = [question];
      data.answer = JSON.parse(data.responses)["Q0"];
    },
  };
};

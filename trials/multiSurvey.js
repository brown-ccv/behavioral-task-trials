/**
 * @description
 * Builds a multi choice/select survey trial.
 * @module
 * @param {Object} options
 * @param {string} options.responseType - This tells jsPsych which plugin file to use to run the trial. (default: 'survey_multi_choice')
 * @param {string} options.preamble - HTML formatted string to display at the top of the page above all the questions. (default: "")
 * @param {string|Array} options.prompts - The question prompts, this can be a string (one question) or an Array of strings (multiple questions) (default: "")
 * @param {Object} options.ansChoices - Object consisting of the key as the answer choice name and value as the array of answer choices. (default: {})
 */

module.exports = function (options) {
  const defaults = {
    responseType: "survey_multi_choice",
    preamble: "",
    prompts: [],
    ansChoices: {},
  };
  const { responseType, preamble, prompts, ansChoices } = {
    ...defaults,
    ...options,
  };

  // setting questions from prompts and answer choices
  let questions = [];
  const answers = Object.values(ansChoices);
  prompts.forEach(function (prompt, index) {
    let options = answers.length === 1 ? answers[0] : answers[index];
    questions.push({
      prompt: prompt,
      options,
      required: true,
    });
  });

  return {
    type: responseType,
    preamble: preamble,
    questions: questions,
    on_finish: (data) => {
      window.scrollTo(0, 0);
      data.prompt = prompts;
      data.ans_choices = [ansChoices];
      data.answer = [{ answer: JSON.parse(data.responses) }];
    },
  };
};

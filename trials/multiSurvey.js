import surveyMultiChoice from "@jspsych/plugin-survey-multi-choice"

/**
 * @description
 * Builds a multi choice/select survey trial.
 * @module
 * @param {Object} options
 * @param {string} options.responseType - This tells jsPsych which plugin file to use to run the trial. (default: surveyMultiChoice from "@jspsych/plugin-survey-multi-choice")
 * @param {string} options.preamble - HTML formatted string to display at the top of the page above all the questions. (default: "")
 * @param {Array} options.prompts - The question prompts, an Array of strings (default: [])
 * @param {Object} options.ansChoices - Object consisting of the key as the answer choice name and value as the array of answer choices. (default: {})
 */
export function multiSurvey(options) {
  const defaults = {
    responseType: surveyMultiChoice,
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
      data.answer = [{ answer: data.response }];
    },
  };
};

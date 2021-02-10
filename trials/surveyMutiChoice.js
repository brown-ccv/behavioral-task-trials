
const iusSurvey = {
  type: "survey_multi_choice",
  preamble: [surveyPreamble1 + surveyPreamble2],
  questions: [
    {
      prompt: iusPrompts[0],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[1],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[2],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[3],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[4],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[5],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[6],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[7],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[8],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[9],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[10],
      options: iusOptions,
      required: true,
    },
    {
      prompt: iusPrompts[11],
      options: iusOptions,
      required: true,
    },
  ],
  on_finish: function (data) {
    window.scrollTo(0, 0); // added to auto-scroll to top of screen
    // TODO Unique Id
    data.uniqueId = "uniqueId";
    data.prompt = iusPrompts;
    data.ans_choices = iusOptions;
    let answer = JSON.parse(data.responses);
    data.answer = [];
    for (let i = 0; i < iusPrompts.length; i++) {
      data.answer.push(answer["Q" + i]);
    }
  },
};

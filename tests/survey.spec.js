const survey = require("../trials/survey.js");

describe("survey trial", () => {
  it("survey with require movement", () => {
    const message = "What is your age?";
    const result = survey(
      {message:message});
    const data = {
      prompt: null,
      answer: null,
      responses: JSON.stringify({Q0:"response"}),
    };
    result.on_finish(data);
    expect(result.questions[0].prompt).toContain(message);
    expect(data.prompt[0]).toContain(message);
    expect(data.answer).toEqual("response");
  });
});

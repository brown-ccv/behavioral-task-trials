import { multiSurvey } from "../trials/multiSurvey.js"

describe("multiSurvey trial", () => {
  it(" with same ans choices for all questions", () => {
    const preamble = "Answer the below questions";
    const options = {
      preamble: preamble,
      prompts: ["hello?", "1?", "2?"],
      ansChoices: { choices: ["no", "yes"] },
    };
    const questions = [
      { prompt: "hello?", options: ["no", "yes"], required: true },
      { prompt: "1?", options: ["no", "yes"], required: true },
      { prompt: "2?", options: ["no", "yes"], required: true },
    ];
    const result = multiSurvey(options);
    expect(result.preamble).toContain(preamble);
    expect(result.questions).toEqual(questions);
  });

  it(" with different ans choices for each questions", () => {
    const preamble = "Answer the below questions";
    const options = {
      preamble: preamble,
      prompts: ["hello?", "1?", "2?"],
      ansChoices: {
        1: ["no", "yes", "maybe"],
        2: ["not at all", "yes"],
        3: ["nope", "yeah"],
      },
    };
    const questions = [
      { prompt: "hello?", options: ["no", "yes", "maybe"], required: true },
      { prompt: "1?", options: ["not at all", "yes"], required: true },
      { prompt: "2?", options: ["nope", "yeah"], required: true },
    ];
    const result = multiSurvey(options);
    expect(result.preamble).toContain(preamble);
    expect(result.questions).toEqual(questions);
  });
});

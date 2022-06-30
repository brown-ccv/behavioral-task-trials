import { survey } from "../trials/survey.js"

describe("survey trial", () => {
  it("survey with require movement", () => {
    const preamble = "Q1?";
    const message = "What is your age?";
    const result = survey({ preamble: preamble, message: message });
    expect(result.preamble).toContain(preamble);
    expect(result.questions[0].prompt).toContain(message);
  });
});

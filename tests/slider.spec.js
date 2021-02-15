const slider = require("../trials/slider.js");

describe("slider trial", () => {
  it("slider with require movement", () => {
    const message = "Move the slider to the right.";
    const result = slider(
      message);
    const data = {
      prompt: null,
      answer: null,
      response: "response",
    };
    result.on_finish(data);
    expect(result.stimulus).toContain(message);
    expect(result.require_movement).toEqual(true);
    expect(data.prompt).toEqual([message]);
    expect(data.answer).toEqual([data.response]);
  });
});

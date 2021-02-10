const slider = require("../trials/slider.js");
const { init } = require("../app.js");

describe("slider trial", () => {
  it("slider with require movement", () => {
    const message = "Move the slider to the right.";
    const uniqueId = "0423";
    const result = slider({
      message: message,
      requireMovement: true,
      uniqueId: uniqueId,
    });
    const data = {
      uniqueId: null,
      prompt: null,
      answer: null,
      response: "response",
    };
    result.on_finish(data);
    expect(result.stimulus).toContain(message);
    expect(result.require_movement).toEqual(true);
    expect(data.uniqueId).toEqual(uniqueId);
    expect(data.prompt).toEqual([message]);
    expect(data.answer).toEqual([data.response]);
  });
});

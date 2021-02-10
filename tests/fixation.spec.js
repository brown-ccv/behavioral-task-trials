const fixation = require("../trials/fixation.js");
const { init } = require("../app.js");
const jsPsych = require("jspsych-react");

describe("Fixation trial", () => {
  it("fixation without photodiode box", () => {
    const config = init({ USE_PHOTODIODE: false });
    const result = fixation(config, {
      duration: 100,
    });
    expect(result.stimulus).toContain("fixation-dot");
    expect(result.stimulus).not.toContain("photodiode-spot");
    expect(result.on_load()).toEqual(null);
    expect(result.on_finish()).toEqual(null);
  });

  it("fixation with photodiode box and task code", () => {
    const config = init({ USE_PHOTODIODE: true });
    let data = { code: null };
    const result = fixation(config, {
      duration: 100,
      taskCode: 10,
      numBlinks: 10,
    });
    expect(result.stimulus).toContain("fixation-dot");
    expect(result.stimulus).toContain("photodiode-spot");
    expect(result.on_load()).not.toEqual(null);
    expect(result.on_finish(data)).toEqual(10);
  });

  it("fixation with jsPsych.NO_KEYS", () => {
    const config = init({ USE_PHOTODIODE: false });
    const result = fixation(config, {
      duration: 100,
      buttons: jsPsych.NO_KEYS,
    });
    expect(result.choices).toEqual(undefined);
  });

  it("fixation with choices", () => {
    const config = init({ USE_PHOTODIODE: false });
    const choices = ["p", "q"];
    const result = fixation(config, {
      duration: 100,
      buttons: choices,
    });
    expect(result.choices).toEqual(choices);
  });
});

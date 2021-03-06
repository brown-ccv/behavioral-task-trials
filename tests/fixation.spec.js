const fixation = require("../trials/fixation.js");
const { init } = require("../app.js");
const jsPsych = require("jspsych-react");

describe("Fixation trial", () => {
  it("fixation without photodiode box", () => {
    const config = init({ USE_PHOTODIODE: false });
    let data = { code: null };
    const result = fixation(config, {
      duration: 100,
    });
    expect(result.stimulus).toContain("fixation-dot");
    expect(result.stimulus).not.toContain("photodiode-spot");
    expect(result.on_load()).toEqual(undefined);
    expect(result.on_finish(data)).toEqual(1);
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
    expect(result.on_load()).toEqual(undefined);
    expect(result.on_finish(data)).toEqual(10);
  });
});
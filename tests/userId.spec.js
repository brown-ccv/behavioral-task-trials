const userId = require("../trials/userId.js");
const { init } = require("../app.js");
const { initJsPsych } = require('jspsych')


const jsPsych = initJsPsych();

describe("userId trial", () => {
  it("check for set ID message", () => {
    const config = init({ USE_MTURK: true });
    const setIdMessage = "Setting User ID";
    const result = userId(jsPsych, config, {
      duration: 100,
      setIdMessage: setIdMessage,
    });
    expect(result.stimulus).toContain(setIdMessage);
  });

  it("userId with stimulus", () => {
    const config = init({ USE_MTURK: true });
    const stimulus = "<h3>Setting User ID</h3>";
    const result = userId(jsPsych, config, {
      duration: 100,
      stimulus: stimulus,
    });
    expect(result.stimulus).toContain(stimulus);
  });
});

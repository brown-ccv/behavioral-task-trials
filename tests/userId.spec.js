import { userId } from "../trials/userId.js"
import { init } from "../app.js"
import { initJsPsych } from "jspsych"

// In jspsych 7, we explicitly instantiate our own jsPsych instead of importing the global instance.
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

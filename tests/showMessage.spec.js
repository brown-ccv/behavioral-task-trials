const showMessage = require("../trials/showMessage.js");
const { init } = require("../app.js");
const jsPsych = require("jspsych-react");

describe("showMessage trial", () => {
  it("showMessage without photodiode box", () => {
    const config = init({ USE_PHOTODIODE: false });
    const message = "Experiment Start";
    const result = showMessage(config, {
      responseType: "html_keyboard_response",
      duration: 100,
      message: message,
    });
    expect(result.stimulus).toContain(message);
    expect(result.stimulus).not.toContain("photodiode-spot");
    expect(result.on_load()).toEqual(null);
    expect(result.on_finish()).toEqual(null);
  });

  it("showMessage with photodiode box and task code", () => {
    const config = init({ USE_PHOTODIODE: true });
    const message = "Experiment Start";
    let data = { code: null };
    const result = showMessage(config, {
      responseType: "html_keyboard_response",
      duration: 100,
      message: message,
      taskCode: 10,
      numBlinks: 10,
    });
    expect(result.stimulus).toContain(message);
    expect(result.stimulus).toContain("photodiode-spot");
    expect(result.on_load()).not.toEqual(null);
    expect(result.on_finish(data)).toEqual(10);
  });

  it("showMessage with jsPsych.NO_KEYS", () => {
    const config = init({ USE_PHOTODIODE: false });
    const result = showMessage(config, {
      responseType: "html_button_response",
      duration: 100,
      message: "",
      buttons: jsPsych.NO_KEYS,
    });
    expect(result.choices).toEqual(undefined);
  });

  it("showMessage with choices", () => {
    const config = init({ USE_PHOTODIODE: false });
    const choices = ["p", "q"];
    const result = showMessage(config, {
      responseType: "html_button_response",
      duration: 100,
      message: "",
      buttons: choices,
    });
    expect(result.choices).toEqual(choices);
  });

  it("showMessage with on start message", () => {
    const config = init({ USE_PHOTODIODE: false });
    const message = "Experiment Start";
    let trial = { stimulus: null };
    const result = showMessage(config, {
      responseType: "html_button_response",
      duration: 100,
      message: message,
      onstart: true,
      taskCode: 10,
      numBlinks: 10,
    });
    expect(result.on_start(trial)).not.toEqual("");
  });

  it("showMessage with stimulus", () => {
    const config = init({ USE_PHOTODIODE: false });
    const stimulus = `<h3>Experiment Start</h3>`;
    const result = showMessage(config, {
      responseType: "html_keyboard_response",
      duration: 100,
      stimulus: stimulus,
      taskCode: 10,
      numBlinks: 10,
    });
    expect(result.stimulus).toContain(stimulus);
  });
});

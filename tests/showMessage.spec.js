import htmlKeyboardResponse from "@jspsych/plugin-html-keyboard-response";
import htmlButtonResponse from "@jspsych/plugin-html-button-response";
import { showMessage } from "../trials/showMessage.js";
import { init } from "../app.js";

describe("showMessage trial", () => {
  it("showMessage without photodiode box", () => {
    const config = init({ USE_PHOTODIODE: false });
    let data = { code: null };
    const message = "Experiment Start";
    const result = showMessage(config, {
      responseType: htmlKeyboardResponse,
      duration: 100,
      message: message,
    });
    expect(result.stimulus).toContain(message);
    expect(result.stimulus).not.toContain("photodiode-spot");
    expect(result.on_load()).toEqual(undefined);
    expect(result.on_finish(data)).toEqual(1);
  });

  it("showMessage with photodiode box and task code", () => {
    const config = init({ USE_PHOTODIODE: true });
    const message = "Experiment Start";
    let data = { code: null };
    const result = showMessage(config, {
      responseType: htmlKeyboardResponse,
      duration: 100,
      message: message,
      taskCode: 10,
      numBlinks: 10,
    });
    expect(result.stimulus).toContain(message);
    expect(result.stimulus).toContain("photodiode-spot");
    expect(result.on_load()).toEqual(undefined);
    expect(result.on_finish(data)).toEqual(10);
  });

  // jspsych 7 uses strings like "ALL_KEYS" and "NO_KEYS" to allow and prevent input.
  it("showMessage with NO_KEYS", () => {
    const config = init({ USE_PHOTODIODE: false });
    const result = showMessage(config, {
      responseType: htmlButtonResponse,
      duration: 100,
      message: "",
      buttons: "NO_KEYS",
    });
    expect(result.choices).toEqual("NO_KEYS");
  });

  it("showMessage with choices", () => {
    const config = init({ USE_PHOTODIODE: false });
    const choices = ["p", "q"];
    const result = showMessage(config, {
      responseType: htmlButtonResponse,
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
      responseType: htmlButtonResponse,
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
      responseType: htmlKeyboardResponse,
      duration: 100,
      stimulus: stimulus,
      taskCode: 10,
      numBlinks: 10,
    });
    expect(result.stimulus).toContain(stimulus);
  });
});

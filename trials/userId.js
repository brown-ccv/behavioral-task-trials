const { baseStimulus } = require("../lib/markup/stimuli");

/**
 * @description
 * Builds a trial with set Id message and user Id input.
 *
 * @module
 * @param {Object} jsPsych - The instance of the jspsych passed as an object.
 * @param {Object} config - The configuration object for USE_PHOTODIODE, USE_EEG, USE_ELECTRON and USE_MTURK flags.
 * @param {boolean} config.USE_PHOTODIODE - USE_PHOTODIODE flag
 * @param {boolean} config.USE_EEG - USE_EEG flag
 * @param {boolean} config.USE_ELECTRON - USE_ELECTRON flag
 * @param {boolean} config.USE_MTURK - USE_MTURK flag
 * @param {Object} options
 * @param {number} options.duration - trial duration in milliseconds, when config.USE_MTURK is set to true. (default: 1000)
 * @param {string} options.stimulus - Onscreen stimulus in HTML to be shown in the trial. If the stimulus is not provided, message should be provided as a string. (default: "")
 * @param {string} options.setIdMessage - Onscreen text for setting user id or for the input box to enter user id. (default: "")
 * @param {string} options.defaultId - The user id to show when requesting a user ID, when config.USE_MTURK is set to false.(default: "")
 */

module.exports = function (jsPsych, config, options) {
  const defaults = {
    duration: 1000,
    stimulus: "",
    setIdMessage: "",
    defaultId: "",
  };
  const {
    duration,
    stimulus,
    setIdMessage,
    defaultId,
  } = { ...defaults, ...options };

  const stimulusOrMessage =
    setIdMessage !== ""
      ? baseStimulus(`<h1>${setIdMessage}</h1>`, true)
      : stimulus;

  if (config.USE_MTURK) {
    return {
      type: "html_keyboard_response",
      stimulus: stimulusOrMessage,
      response_ends_trial: false,
      trial_duration: duration,
      on_finish: () => {
        const turkInfo = jsPsych.turk.turkInfo();
        const uniqueId = `${turkInfo.workerId}:${turkInfo.assignmentId}`;
        console.log(uniqueId);
      },
    };
  } else {
    return {
      type: "survey_text",
      questions: [
        {
          prompt: stimulusOrMessage,
          value: defaultId,
        },
      ],
      on_finish: (data) => {
        const patientId = JSON.parse(data.responses)["Q0"];
        jsPsych.data.addProperties({
          patient_id: patientId,
          timestamp: Date.now(),
        });
        console.log("ID", patientId);
      },
    };
  }
};

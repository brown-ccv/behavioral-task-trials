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
 * @param {number} options.duration - The trial duration in milliseconds.
 * @param {string} options.setIdMessage - Onscreen text for setting user id or for the input box to enter patient id.
 * @param {boolean} options.responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {boolean} options.defaultPatientId - The patient id to show when requesting a patient ID, if not set default is empty.
 */

module.exports = function (jsPsych, config, options) {
  const defaults = {
    setIdMessage: "",
    responseEndsTrial: false,
    defaultPatientId: "",
  };
  const {
    duration,
    setIdMessage,
    responseEndsTrial,
    defaultPatientId,
  } = { ...defaults, ...options };

  if (config.USE_MTURK) {
    return {
      type: 'html_keyboard_response',
      stimulus: baseStimulus(`<h1>${setIdMessage}</h1>`, true),
      response_ends_trial: responseEndsTrial,
      trial_duration: duration,
      on_finish: (data) => {
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
          prompt: baseStimulus(`<h1>${setIdMessage}</h1>`, true),
          value: defaultPatientId,
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

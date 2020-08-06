const { baseStimulus } = require('../lib/markup/stimuli')

/**
 * Builds a trial with set Id message and user Id input.
 * @module
 * @param {object} jsPsych - The instance of the jspsych passed as an object.
 * @param {number} duration - The trial duration in milliseconds.
 * @param {object} config - The configuration object for USE_PHOTODIODE, IS_ELECTRON and USE_MTURK flags, by default only IS_ELECTRON is set to be true.
 * @param {string} setIdMessage - Onscreen text for setting user id or for the input box to enter patient id.
 * @param {boolean} responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration, by default false value.
 * @param {string} defaultPatientId - The patient id to show when requesting a patient ID, if not set default is empty.
 */


module.exports =  function(jsPsych, duration, config, setIdMessage = "", responseEndsTrial = false, defaultPatientId = ""){
  if (config.USE_MTURK) {
    return {
      type: 'html_keyboard_response',
      stimulus: baseStimulus(`<h1>${setIdMessage}</h1>`, true),
      response_ends_trial: responseEndsTrial,
      trial_duration: duration,
      on_finish: (data) => {
        const turkInfo = jsPsych.turk.turkInfo()
        const uniqueId = `${turkInfo.workerId}:${turkInfo.assignmentId}`
        console.log(uniqueId)
      }
    }
  }
  else {
    return {
      type: 'survey_text',
      questions: [{ prompt: baseStimulus(`<h1>${setIdMessage}</h1>`, true), value:  defaultPatientId}],
      on_finish: (data) => {
        const patientId = JSON.parse(data.responses)['Q0']
        jsPsych.data.addProperties({patient_id: patientId, timestamp: Date.now()})
        console.log("ID", patientId)
      }
    }
  }
}
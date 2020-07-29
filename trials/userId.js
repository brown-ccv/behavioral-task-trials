const { jsPsych } = require('jspsych-react')
const { baseStimulus } = require('../lib/markup/stimuli')
const setIdMessageDefault = (config.USE_MTURK)?"Setting up user ID.":"Please enter patient ID.";

module.exports =  function(duration, config, setIdMessage = setIdMessageDefault, responseEndsTrial = false, REACT_APP_PATIENT_ID = ""){
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
      questions: [{ prompt: baseStimulus(`<h1>${setIdMessage}</h1>`, true), value:  REACT_APP_PATIENT_ID}],
      on_finish: (data) => {
        const patientId = JSON.parse(data.responses)['Q0']
        jsPsych.data.addProperties({patient_id: patientId, timestamp: Date.now()})
        console.log("ID", patientId)
      }
    }
  }
}


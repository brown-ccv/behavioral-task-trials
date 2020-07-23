const { config } = require('../app')
const { getUserId, getTurkUniqueId } = require('../lib/utils')
const { baseStimulus } = require('../lib/markup/stimuli')
const setIdMessageDefault = (config.USE_MTURK)?"Setting up user ID.":"Please enter patient ID.";

module.exports =  function(setIdMessage = setIdMessageDefault){
  if (config.USE_MTURK) {
    return {
      type: 'html_keyboard_response',
      stimulus: baseStimulus(`<h1>${setIdMessage}</h1>`, true),
      response_ends_trial: false,
      // here do we want to pass the duration for each trial as a function input?
      // in that case what will be the default?
      trial_duration: 800,
      on_finish: (data) => {
        const uniqueId = getTurkUniqueId()
      }
    }
  }
  else {
    return {
      type: 'survey_text',
      // here REACT_APP_PATIENT_ID what is the significance of it?
      questions: [{ prompt: baseStimulus(`<h1>${setIdMessage}</h1>`, true), value:  }],
      // here where is the data coming from?
      on_finish: (data) => {
        getUserId(data)
      }
    }
  }
}


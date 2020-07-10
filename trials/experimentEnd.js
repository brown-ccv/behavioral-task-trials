const { lang } = require('../config/main')
const { photodiodeGhostBox } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')

const experimentEnd = (duration) => {
  let stimulus = baseStimulus(`<h1>${lang.task.end}</h1>`, true) + photodiodeGhostBox()

   return {
    type: 'html_keyboard_response',
    stimulus: stimulus,
    trial_duration: duration
  }
}


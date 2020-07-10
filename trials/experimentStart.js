const { lang } = require('../config/main')
const { photodiodeGhostBox } = require('../lib/markup/photodiode')
const { baseStimulus } = require('../lib/markup/stimuli')

exports.experimentStart = () => {
  let stimulus = baseStimulus(`<h1>${lang.task.name}</h1>`, true) + photodiodeGhostBox()

   return {
    type: 'html_button_response',
    stimulus: stimulus,
    choices: [lang.prompt.continue.button]
  }
}


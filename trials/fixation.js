const { jitter50 } = require('../lib/utils')
const { pdSpotEncode, photodiodeGhostBox } = require('../lib/markup/photodiode')
const { fixationHTML } = require('../lib/markup/fixation')

const fixation = (duration) => {
  let stimulus = fixationHTML + photodiodeGhostBox()

  const code = eventCodes.fixation;

  return {
    type: 'html_keyboard_response',
    choices: jsPsych.NO_KEYS,
    stimulus: stimulus,
    response_ends_trial: false,
    trial_duration: jitter50(duration),
    on_load: () => pdSpotEncode(code),
    on_finish: (data) => data.code = code
  }
}

export default fixation

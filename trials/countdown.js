const _ = require('lodash')

/**
 * Builds a countdown transition with the given text and number of seconds.
 * @constructor
 * @param {string} text - Optional text for the countdown.
 * @param {number} time - The number of seconds for the countdown.
 * @param {number} duration - The trial duration .
 * @param {boolean} response_ends_trial - True if the trial ends on response,false if the trial waits for the duration.
 */



module.exports = function(_duration, _text="", _time=10, _response_ends_trial=false) {
  const times = _.range(_time, 0 , -1)
  const timeline = times.map( (val) => {return({ prompt: `<h1>${val}</h1>` })})

  return ({
    type: 'html_keyboard_response',
    stimulus: `<h3>${_text}</h3`,
    trial_duration: _duration,
    response_ends_trial: _response_ends_trial,
    timeline:  timeline
  })
}

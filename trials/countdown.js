const _ = require('lodash')

/**
 * Builds a countdown transition with the given text and number of seconds.
 * @module
 * @param {string} text - Optional text for the countdown.
 * @param {number} time - The number of seconds for the countdown.
 * @param {number} duration - The trial duration .
 * @param {boolean} responseEndsTrial - True if the trial ends on response,false if the trial waits for the duration.
 */



module.exports = function(duration, text="", time=10, responseEndsTrial=false) {
  const times = _.range(time, 0 , -1)
  const timeline = times.map( (val) => {return({ prompt: `<h1>${val}</h1>` })})

  return ({
    type: 'html_keyboard_response',
    stimulus: `<h3>${text}</h3`,
    trial_duration: duration,
    response_ends_trial: responseEndsTrial,
    timeline:  timeline
  })
}

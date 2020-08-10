const { photodiodeGhostBox, pdSpotEncode } = require('../lib/markup/photodiode')
const $ = require('jquery')
const { jitter50 } = require('../lib/utils')


module.exports = function(responseType, duration, config, image, imageHeight=600, imageWidth=600, responseEndsTrial=false, taskCode = null, numBlinks = 1, buttons) {
  
  
  return {
    type: responseType,
    stimulus: image,
    prompt: (config.USE_PHOTODIODE)?photodiodeGhostBox():null,
    response_ends_trial: responseEndsTrial,
    trial_duration: jitter50(duration),
    choices: buttons,
    on_load: () => {
      $('#jspsych-image-keyboard-response-stimulus').addClass('image')
      $('#jspsych-image-keyboard-response-stimulus').height(imageHeight)
      $('#jspsych-image-keyboard-response-stimulus').width(imageWidth)
      $('html').css('cursor', 'none')
      (taskCode!=null)?pdSpotEncode(taskCode, numBlinks, config):null
    },
    on_finish: (data) => {
      data.code = code
      $('html').css('cursor', 'auto')
    }
  }
}

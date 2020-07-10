// config/main.js
// This is the main configuration file where universal and default settings should be placed.
// These settins can then be imported anywhere in the app as they are exported at the botom of the file.

const {jsPsych} = require('jspsych-react')
const _ = require('lodash')


// is this mechanical turk?
exports.MTURK = (!jsPsych.turk.turkInfo().outsideTurk)
exports.AT_HOME = (process.env.REACT_APP_AT_HOME === 'true')
exports.IS_ELECTRON = true

try {
	window.require('electron')
} catch {
	IS_ELECTRON = false
}

// get language file
exports.lang = require('../language/en_us.json')
if (MTURK) { // if this is mturk, merge in the mturk specific language
  const mlang = require('../language/en_us.mturk.json')
	_.merge(lang, mlang)
}


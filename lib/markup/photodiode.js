// const { eventCodes } = require('../../config/trigger');
const $ = require('jquery');

// conditionally load electron and psiturk based on MTURK config variable
// let ipcRenderer = false;
// if (IS_ELECTRON) {
//   const electron = window.require('electron');
//   ipcRenderer  = electron.ipcRenderer;
// }


module.exports = {
  photodiodeGhostBox: function() {
	const class_ = 'visible'

  const markup = `<div class="photodiode-box ${class_}" id="photodiode-box">
									<span id="photodiode-spot" class="photodiode-spot"></span>
  								</div>`
	return markup
}}

// const pdSpotEncode = (taskCode) => {
//   function pulse_for(ms, callback) {
//       $('.photodiode-spot').css({"background-color": "black"})
//       setTimeout(() => {
//         $('.photodiode-spot').css({"background-color": "white"})
//         callback()
//       }, ms)
//     }

//     function repeat_pulse_for(ms, i) {
//       if (i > 0) {
//         pulse_for(ms, () => {
//           setTimeout(() => {
//             repeat_pulse_for(ms, i-1)
//           }, ms)
//         })
//       }
//     }

// 		if (!AT_HOME && IS_ELECTRON) {
// 				const blinkTime = 40
// 				let numBlinks = taskCode
// 		    if (taskCode < eventCodes.open_task) numBlinks = 1;
// 				repeat_pulse_for(blinkTime, numBlinks)
// 				if ( ipcRenderer ) ipcRenderer.send('trigger', taskCode)
// 			}
// 		}


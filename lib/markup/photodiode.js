const $ = require('jquery');

let ipcRenderer;
try {
  const electron = window.require('electron');
  ipcRenderer  = electron.ipcRenderer;
}
catch (error) {
	ipcRenderer = false;
}


module.exports = {
  photodiodeGhostBox: function() {
	const class_ = 'visible'

	const markup = `<div class="photodiode-box ${class_}" id="photodiode-box">
										<span id="photodiode-spot" class="photodiode-spot"></span>
									</div>`
		return markup
	},
	pdSpotEncode: function(taskCode, numBlinks, config) {
		function pulse_for(ms, callback) {
			$('.photodiode-spot').css({"background-color": "black"})
			setTimeout(() => {
			  $('.photodiode-spot').css({"background-color": "white"})
			  callback()
			}, ms)
		  }
	  
		function repeat_pulse_for(ms, i) {
		if (i > 0) {
			pulse_for(ms, () => {
			setTimeout(() => {
				repeat_pulse_for(ms, i-1)
			}, ms)
			})
		}
		}
	  
		if (config.USE_PHOTODIODE) {
				const blinkTime = 40
				repeat_pulse_for(blinkTime, numBlinks)
				if ( ipcRenderer ) ipcRenderer.send('trigger', taskCode)
			}
		}
}



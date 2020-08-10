const fs = require('fs');
const trials = './trials';
const _ = require('lodash')

const defaultconfig = { USE_PHOTODIODE: false,  USE_EEG: false, IS_ELECTRON: true, USE_MTURK: false}


module.exports = { 
  init: function(_config){
      return _.extend(defaultconfig,_config)
  },
  countdown: require('./trials/countdown.js'),
  showMessage: require('./trials/showMessage.js'),
  fixation: require('./trials/fixation.js'),
  userId: require('./trials/userId.js'),
  showImage: require('./trials/showImage.js')
};
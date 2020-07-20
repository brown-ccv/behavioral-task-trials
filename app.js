const fs = require('fs');
const trials = './trials';
const _ = require('lodash')

exports.config = { USE_PHOTODIODE: false,  USE_EEG: false, IS_ELECTRON: true, USE_MTURK: false}



// fs.readdir(trials, (err, files) => {
//   files.forEach(file => {
//     console.log(require(trials+'/'+file));
//   });
// });
console.log(require('./trials/showMessageChoice.js')(100,undefined));
module.exports = { 
    init: function(_config){
        return config = _.merge(_config, config)
    },
    countdown: require('./trials/countdown.js'),
    showMessage: require('./trials/showMessage.js'),
    showMessageChoice: require('./trials/showMessageChoice.js')
};
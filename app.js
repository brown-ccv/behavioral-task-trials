const fs = require('fs');
const trials = './trials';

var config = { USE_PHOTODIODE: false,  AT_HOME: false, IS_ELECTRON: true}



// fs.readdir(trials, (err, files) => {
//   files.forEach(file => {
//     console.log(require(trials+'/'+file));
//   });
// });
// console.log(require('./trials/experimentEnd.js')(100,'This is end',true));
module.exports = { 
    countdown: require('./trials/countdown.js'),
    experimentEnd: require('./trials/experimentEnd.js')(100,'This is end',true)
};
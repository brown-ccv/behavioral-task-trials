const fs = require('fs');
const trials = './trials';

// fs.readdir(trials, (err, files) => {
//   files.forEach(file => {
//     console.log(require(trials+'/'+file));
//   });
// });
// console.log(require('./trials/experimentStart.js'));
exports.require('./trials/countdown.js');
const fs = require('fs');
const trials = './trials';
const _ = require('lodash')

const defaultconfig = { USE_PHOTODIODE: false,  USE_EEG: false, IS_ELECTRON: true, USE_MTURK: false}


module.exports = { 
    init: function(_config){
        return _.extend(defaultconfig,_config)
    }
};

fs.readdir(trials, (err, files) => {
  files.forEach(file => {
    let filename = file.split('.')[0]
    module.exports = { 
        filename: require(trials+'/'+file)
    };
  });
});
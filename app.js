const fs = require('fs');
const trials = './trials';
const _ = require('lodash')

const functions = {}
const defaultconfig = { USE_PHOTODIODE: false,  USE_EEG: false, IS_ELECTRON: true, USE_MTURK: false}

functions['init'] = function(_config){
  return _.extend(defaultconfig,_config)
}


fs.readdirSync(trials)
.filter(file => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
.map((file) => {functions[file.slice(0, -3)] = require(trials+'/'+file)})

module.exports = functions;
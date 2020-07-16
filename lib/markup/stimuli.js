module.exports = {
  
  baseStimulus: function(element, prompt=false){
  const class_ = (prompt) ? 'main-prompt': 'main'
  return `<div class=${class_}>${element}</div>`
}
}


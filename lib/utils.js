// add a random number between 0 and offset to the base number
const jitter = (base, offset) => (
  base + Math.floor(Math.random() * Math.floor(offset))
)

// add a random number between 0 and x to the base number
const jitterx = (base, x) => jitter(base, x)

module.exports ={
  jitter,
  jitterx
}

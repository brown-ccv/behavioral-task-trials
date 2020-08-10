// add a random number between 0 and offset to the base number
const jitter = (base, offset) => (
  base + Math.floor(Math.random() * Math.floor(offset))
)

// add a random number between 0 and 50 to the base number
const jitter50 = (base) => jitter(base, 50)

module.exports ={
  jitter,
  jitter50
}

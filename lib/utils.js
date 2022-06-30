// add a random number between 0 and offset to the base number
const jitterx = (base, offset) => (
  base + Math.floor(Math.random() * Math.floor(offset))
)

export {
  jitterx
}

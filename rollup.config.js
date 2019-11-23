
if (!process.env.TARGET) {
  throw new Error('TARGET package must be specified via --environment flag.')
}

const inlineFromats = process.env.FORMATS && process.env.FORMATS.split(',')
console.log(inlineFromats)
module.exports = {

}
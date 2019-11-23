const fs = require('fs')
// 获取package目录下的目录名称
const targets = exports.targets = fs.readdirSync('packages').filter(f => {
  // console.log(f)
  return fs.statSync(`packages/${f}`).isDirectory()
})
// 模糊匹配目标
exports.fuzzyMatchTarget = partialTarget => {
  const matched = []
  for (const target of targets) {
    if (target.match(partialTarget)) {
      matched.push(target)
    }
  }
  if (matched.length) {
    return matched
  } else {
    throw new Error(`Target ${partialTarget} not found!`)
  }
}
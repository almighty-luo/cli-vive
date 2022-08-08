
module.exports = function findSelectData (url) {
  return require(path.join(url, 'template.json'))
}
// var fs = require('fs')
// const path = require('path')

// require.extensions['.svg'] = function (module, filename) {
//   module.exports = fs.readFileSync(filename).toString()
// }

// const getIcon = (value) => {
//   let icon = require(path.resolve(__dirname, value))
//   icon = icon.trim().replace(/(?:\r\n|\r|\n)/g, '')
//   icon = icon.replace(/#/g, '%23')
//         .replace(/{/g, '%7B')
//         .replace(/}/g, '%7D')
//         .replace(/</g, '%3C')
//         .replace(/>/g, '%3E')
//         .replace(/\s+/g,' ')
//   return `'${icon}'`
// }

// module.exports = theo => {
//   theo.registerValueTransform(
//     'svg',
//     prop => prop.get('type') === 'svg-default',
//     prop => getIcon(prop.get('value'))
//   )
//   theo.registerTransform('web', ['svg'])
// }

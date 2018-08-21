const rm = require('rimraf')
const config = require('./config')

rm(config.route.dist, err => {
  if (err) throw err
})

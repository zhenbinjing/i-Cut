const rm = require('rimraf')
const config = require('./config')
const ismdlegacy = process.env.MDLEGACY === 'mdlegacy'

if(!ismdlegacy){
rm(config.route.dist, err => {
  if (err) throw err
  console.log("delete build file")
})
}

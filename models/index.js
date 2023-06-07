const mongoose  = require('mongoose')
const makeSchema = require('./make')
const phoneSchema = require('./phone')
const platformSchema = require('./platform')

const Make = mongoose.model('Make', makeSchema)
const Phone = mongoose.model('Phone', phoneSchema)
const Platform = mongoose.model('Platform', platformSchema)

module.exports = {
  Make,
  Phone,
  Platform
}
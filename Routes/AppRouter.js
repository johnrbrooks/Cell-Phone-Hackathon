const express = require('express');
const Router = express.Router()
const MakeRouter = require('./makeRouter')
const PhoneRouter = require('./phoneRouter')
const PlatformRouter = require('./platformRouter')


Router.use('/makes', MakesRouter)
Router.use('/phones', PhonesRouter)
Router.use('/platforms', PlatformsRouter)

module.exports = Router
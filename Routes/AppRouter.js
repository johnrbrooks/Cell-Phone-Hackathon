const express = require('express');
const Router = express.Router()
const MakeRouter = require('./makesRouter')
const PhoneRouter = require('./phonesRouter')
const PlatformRouter = require('./platformsRouter')


Router.use('/makes', MakeRouter)
Router.use('/phones', PhoneRouter)
Router.use('/platforms', PlatformRouter)

module.exports = Router
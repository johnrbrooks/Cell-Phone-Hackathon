const Router = require('express').Router()
const controller = require('../controllers/makeController.js')


Router.get('/makes', controller.getMakes)

Router.get('/makes/:id', controller.getMakesById)




module.exports = Router
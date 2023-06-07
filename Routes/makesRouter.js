const Router = require('express').Router()
const controller = require('../controllers/makesController.js')


Router.get('/', controller.getMakes)

Router.get('/:id', controller.getMakesById)




module.exports = Router
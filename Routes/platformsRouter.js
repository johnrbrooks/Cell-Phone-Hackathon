const express = require('express')
const Router = require('express').Router()
const platformsController = require('../controllers/platformsController.js')






Router.get('/', platformsController.getPlatforms)

Router.get('/:id', platformsController.getPlatformsById)




module.exports = Router
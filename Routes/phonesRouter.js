const express = require('express')
const Router = require('express').Router()
const phonesController = require('../controllers/phonesController.js')






Router.get('/', phonesController.getPhones)

Router.get('/:id', phonesController.getPhonesById)




module.exports = Router
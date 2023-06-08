const express = require('express')
const Router = require('express').Router()
const phonesController = require('../controllers/phoneController.js')






Router.get('/', phonesController.getPhones)
Router.get('/:id', phonesController.getPhonesById)
Router.put('/:id', phonesController.updatePhone)




module.exports = Router
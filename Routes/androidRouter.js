const express = require('express')
const Router = require('express').Router()
const controller = require('../controllers/makeController.js')

Router.get('/samsung', controller.getSamsungPhones)
Router.get('/google', controller.getGooglePhones)

module.exports = Router
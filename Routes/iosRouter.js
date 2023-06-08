const express = require('express')
const Router = require('express').Router()
const controller = require('../controllers/makeController.js')

Router.get('/apple', controller.getApplePhones)

module.exports = Router
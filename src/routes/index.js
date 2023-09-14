const express = require('express')
const app = express();
const authentication = require('./authentication')

app.use('/', authentication)
module.exports = app
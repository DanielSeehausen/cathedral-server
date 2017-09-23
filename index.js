const express = require('express')
var path = require('path')
const app = express()
require('./wsocket/index.js')

const root = __dirname + '/public/'

// some middleware for logging the knotty bad
app.use(function(req, res, next) {
  console.log(req.connection.remoteAddress + " requesting: " + req.originalUrl)
  next()
})

// root bebeeh
app.get('/', (req, res) => {
  res.sendFile(root + 'index.html')
})

app.get('/lobby', (req, res) => {
  res.sendFile(root + '/build/testClient.js')
})

// routes for all the 404 pages assets, including stylesheet
app.get('/404/:file', (req, res) => {
  res.sendFile(root + '/404/' + req.params.file)
})

// catch all sends them suckas two bernard u no it m8
app.get('*', (req, res) => {
  res.sendFile(root + '/404/index.html')
})


app.listen(3000)

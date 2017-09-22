const express = require('express')
var path = require('path')
const app = express()
require('./wsocket/index.js')

// app.use(express.static('public'))

const root = __dirname + '/public/'
console.log(root)

app.get('/lobby', (req, res) => {
  res.send("poop went to /lobby")
})

app.get('/', (req, res) => {
  console.log('attempting to send public/index.html')
  res.sendFile(root + 'index.html')
})

app.get('/404/:file', (req, res) => {
  console.log('attempting to send public/index.html')
  res.sendFile(root + '/404/' + file)
})

app.get('*', (req, res) => {
  console.log('attempting to send public/four-oh-four/index.html')
  res.sendFile(root + '/404/index.html')
})


app.listen(3000)

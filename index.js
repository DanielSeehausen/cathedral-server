const express = require('express')
const app = express()
require('./wsocket/index.js')


app.use('/public', express.static('public'))

app.get('/lobby', (req, res) => {
  res.send("poop joined lobby")
})

app.get('/', (req, res) => {
  console.log()
  res.sendFile("/public/index.html")
})

app.listen(3000)

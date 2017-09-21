var WebSocket = require('ws')
var ws = new WebSocket('ws://www.localhost.com/lobby')

function testClientPlease() {
  console.log("this is working")
}

ws.on('open', function() {
    ws.send('something')
})
ws.on('message', function(message) {
    console.log('received: %s', message)
})

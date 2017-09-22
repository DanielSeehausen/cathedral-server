var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({port: 8080})

wss.on('connection', (ws, req) => {

    const ip = req.connection.remoteAddress;
    console.log(`IP: ${ip} -- CONNECTED`)

    ws.on('message', (msg) => {
        console.log('received: %s', msg)
        ws.send(`received client's msg: "${msg}"`)
    })

})

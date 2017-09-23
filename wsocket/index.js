const Game = require('../game/Game.js')
const Player = require('../game/Player.js')

var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({port: 8080})

wss.on('connection', (ws, req) => {

    const ip = req.connection.remoteAddress
    console.log(`IP: ${ip} -- CONNECTED`)

    var game = null
    const player = new Player(ip)

    game = Game.joinOrCreateGame(player)
    console.log(`\nGame now: ${game}`)

    ws.on('message', (msg) => {
        console.log('received: %s', msg)
        ws.send(`received client's msg: "${msg}"`)
    })

})

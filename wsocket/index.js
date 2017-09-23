const Game = require('../game/Game.js')
const Player = require('../game/Player.js')
const dispatch = require('./dispatch.js')

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
        ws.send(`received client's msg: "${msg}"...Attempting to execute dispatch`)
        let action = JSON.parse(msg)["action"]
        let payload = JSON.parse(msg)["payload"]
        let result = dispatch[action](game, player, payload)
        let response = JSON.stringify(result)
        console.log(`HERE IS THE RESULT BUDDAY:\n${response}`)
        ws.send(response)
    })

})

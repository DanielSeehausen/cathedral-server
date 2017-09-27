const dispatch = require('./dispatch.js')
const unpack = require('./ws-msg-unpacker.js')
const ws = new WebSocket('ws://www.localhost:8080')
const testGame = require('./testClient.js')

// Connection opened
ws.addEventListener('open', (event) => {
  // ws.send(JSON.stringify(GREETING))
})

// Listen for messages
ws.addEventListener('message', (event) => {
  /* 1. Websocket communication comes from server
   * 2. Unpacker converts to format for consumption on client
   * 3. Dispatch sends message to appropriate place
  */
  const msg = unpack(event.data)
  dispatch(msg)
})

// Connection closed
ws.addEventListener('close', (event) => {
  ws.send('ws on close client fired!!')
})

// Connection closed
ws.addEventListener('error', (event) => {
  ws.send('Websocket error: ', event.data)
})

function runTest() {
  testGame(ws)
}

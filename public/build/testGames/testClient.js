const ws1 = new WebSocket('ws://www.localhost:8080')
const ws2 = new WebSocket('ws://www.localhost:8080')

function log(wsID, action, msg) {
  console.log(`\nWebSocket ${wsID} ${action}:\n\t`)
  console.table(msg)
}

// initializing our two clients with IDs 1 && 2
(() => {
  const wsConns = [ws1, ws2]
  wsConns.forEach((ws, idx) => {
    // Connection opened
    ws.addEventListener('open', (event) => {
      log(idx, 'opened', event.data)
    })

    // Listen for messages
    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data)
      log(idx, 'received', msg)
    })

    // Connection closed
    ws.addEventListener('close', (event) => {
      log(idx, 'closed', msg)
    })

    // Connection errored
    ws.addEventListener('error', (event) => {
      console.error("Client websocket errored: ", event.data)
    })
  })
})()

function assertMsg(msg, expectedMsg) {
  const result = JSON.stringify(msg) === JSON.stringify(expectedMsg)
  console.assert(result, `${msg}\n${expectedMsg}`)
}

function runTest(testGame) {
  var lastSender = 2
  const ws1MsgIdx = 0
  const ws2MsgIdx = 0
  const ws1Sends = testGame.sends.ws1
  const ws2Sends = testGame.sends.ws2
  const ws1Receives = testGame.receives.ws1
  const ws2Receives = testGame.receives.ws2

  ws1.send({action: 'ready'})
  ws2.send({action: 'ready'})

  ws1.addEventListener('message', (event) => {
    let msg = event.data
    assertMsg(msg, ws1Receives[ws1MsgIdx])
    if (lastSender === 2) {
      ws1.send(ws1Sends[ws1MsgIdx])
      ws1MsgIdx++
      lastSender = 1
    }
  })

  ws2.addEventListener('message', (event) => {
    let msg = event.data
    assertMsg(msg, ws2Receives[ws2MsgIdx])
    if (lastSender === 1) {
      ws2.send(ws2Sends[ws2MsgIdx])
      ws2MsgIdx++
      lastSender = 2
    }
  })

}

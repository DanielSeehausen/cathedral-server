const digestMsg = require('./ws-msg-unpacker.js')
const testGame1 = require('./testGames/testGame1.js')

var lastResp = null

function assert(actualResponse, expectedResponse) {
  console.log(actualResponse)
  console.log('********************************')
  console.log(expectedResponse)
}

function debugTest(testGame, ws) {
  let currMsgIdx = 0
  let expectedResp = null
  setInterval(() => {
    if (lastResp) {
      assert(lastResp, expectedResponse)
      debugger
    }
    expectedResponse = testGame.expectedResponses[currMsgIdx]
    ws.send(testGame.messages[currMsgIdx])
    currMsgIdx++
  }, 1000)
}

function main(ws) {
  ws.addEventListener('message', (event) => {
    const lastResp = digestMsg('unpack', event.data)
    console.log("Server response: ", lastResp)
  })
  debugTest(testGame1, ws)
}

module.exports = main

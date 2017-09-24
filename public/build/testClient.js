var ws = new WebSocket('ws://www.localhost:8080')

const GREETING = {
  "action": "chat",
  "payload": "this is a chat message from the client"
}

// Connection opened
ws.addEventListener('open', (event) => {
  // ws.send(JSON.stringify(GREETING))
});

// Listen for messages
ws.addEventListener('message', (event) => {
  console.log(event.data)
});

// Connection closed
ws.addEventListener('close', (event) => {
  ws.send('ws on close client fired!!')
});

// Connection closed
ws.addEventListener('error', (event) => {
  ws.send('Websocket error: ', event.data)
});

function pack(action, msg) {
  msg["action"] = action
  return JSON.stringify(msg)
}

function testMove(blockCoords) {
  const msg = {
    "blockCoords": blockCoords
  }
  ws.send(pack("move", msg))
}

function testPass() {
  const msg = {
    "action": "pass",
  }
  ws.send(pack("pass", msg))
}

function testChat(chat) {
  const msg = {
    "chatStr": chat,
  }
  ws.send(pack("chat", msg))
}

function testQuit(chat) {
  const msg = {
    "placeholder": true,
  }
  ws.send(pack("quit", msg))
}

function runTest() {
  setTimeout(() => testChat("this is a test chat string from test file"), 1000)
  setTimeout(() => testMove([[0, 0], [0, 1], [1, 1]]), 2000)
  setTimeout(() => testPass([[0, 0], [0, 1], [1, 1]]), 3000)
  setTimeout(() => testQuit([[0, 0], [0, 1], [1, 1]]), 4000)
}

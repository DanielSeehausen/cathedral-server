var ws = new WebSocket('ws://www.localhost:8080')

const GREETING = {
  "action": "chat",
  "payload": "this is a chat message from the client"
}

// Connection opened
ws.addEventListener('open', (event) => {
  ws.send(JSON.stringify(GREETING))
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

function testMove(coordinates) {
  const msg = {
    "action": "move",
    "payload": coordinates
  }
  ws.send(JSON.stringify(msg))
}

function testPass(JSON) {
  const msg = {
    "action": "pass",
    "payload": "passing"
  }
  ws.send(JSON.stringify(msg));
}

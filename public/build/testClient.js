var ws = new WebSocket('ws://www.localhost:8080')

// Connection opened
ws.addEventListener('open', (event) => {
    ws.send('Hello Server!');
});

// Listen for messages
ws.addEventListener('message', (event) => {
    console.log('R:', event.data);
});

// Connection closed
ws.addEventListener('close', (event) => {
    ws.send('Hello Server!');
});

// Connection closed
ws.addEventListener('error', (event) => {
    ws.send('Websocket error: ', event.data);
});

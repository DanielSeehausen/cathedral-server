function unpack(msg) {
  return JSON.parse(msg)
}

function pack(msg, action) {
  // TODO add timestamp to response
  msg["action"] = action
  return JSON.strigify(msg)
}

function digestMsg(method, msg) {
  return (method === "pack") ? pack(msg, action) : unpack(msg)
}

module.exports = digestMsg

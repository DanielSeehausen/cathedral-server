function unpack(msg) {
  return JSON.parse(msg)
}

function pack(msg, action) {
  msg["action"] = action
  return JSON.stringify(msg)
}

function digestMsg(method, msg, action) {
  return (method === "pack") ? pack(msg, action) : unpack(msg)
}

module.exports = digestMsg

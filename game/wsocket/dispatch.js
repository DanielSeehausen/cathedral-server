const digestMsg = require('./msgDigester')

const move = require('../actions/move.js')
const chat = require('../actions/chat.js')
const pass = require('../actions/pass.js')
const quit = require('../actions/quit.js')


const DISPATCH_DICT = {
  'move': move,
  'pass': pass,
  'chat': chat,
  'quit': quit
}

function dispatch(game, player, payload) {
  let msg = digestMsg("unpack", payload)
  let action = msg["action"]
  let response = DISPATCH_DICT[action](game, player, msg)
  return digestMsg('pack', response, action)
}

module.exports = dispatch

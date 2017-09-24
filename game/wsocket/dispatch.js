const digestMsg = require('./msgDigester')

const move = require('../move.js')
const chat = require('../chat.js')
const pass = require('../pass.js')
const quit = require('../quit.js')


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

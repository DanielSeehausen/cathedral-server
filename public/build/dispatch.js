const startGame = require('../actions/startGame.js')
const gameUpdate = require('../actions/gameUpdate.js')
const chat = require('../actions/chat.js')
const terminate = require('../actions/terminate.js')

const DISPATCH_DICT = {
  'startGame': startGame,
  'gameUpdate': gameUpdate,
  'chat': chat,
  'terminate': terminate
}

function dispatch(game, player, payload) {
  let msg = digestMsg("unpack", payload)
  let action = msg["action"]
  let response = DISPATCH_DICT[action](game, player, msg)
  return digestMsg('pack', response, action)
}

module.exports = dispatch

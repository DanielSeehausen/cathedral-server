function quit(game, player, chatStr) {
  return `Player: ${player.id} would be ending the game, if I finished the function...`
}

function chat(game, player, chatStr) {
  return `this would be a chat, if I finished the function..."${chatStr}:"`
}

function swapPlayer(game) {
  game.swapPlayer()
  return game.toJSONReadyObj()
}

function move(game, player, blockCoordinates) {
  if (game.activePlayer !== player)
    return `${player.id} tried to move, but is not the game's active player! (${game.activePlayer})`
  let success = game.playerMove(player.id, blockCoordinates)
  return (success) ? game.toJSONReadyObj() : `${player.id} tried to move, but it was found invalid!`
}

const dispatch = {
  'move': move,
  'pass': swapPlayer,
  'chat': chat,
  'quit': quit
}

module.exports = dispatch

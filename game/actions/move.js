function move(game, player, blockCoordinates) {
  if (game.activePlayer !== player)
    return `${player.id} tried to move, but is not the game's active player! (${game.activePlayer})`
  let success = game.playerMove(player.id, blockCoordinates)
  return (success) ? game.toJSONReadyObj() : `${player.id} tried to move, but it was found invalid!`
}

module.exports = move

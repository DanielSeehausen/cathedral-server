

function move(game, player, blockCoordinates) {
  if (game.currPlayer !== player)
    return `${player} tried to move, but is not the game's current player! (${game.currPlayer})`
  game.move(player, blockCoordinates)
}


const dispatch = {
  'move': null,
  'chat': null,
  'quit': null
}

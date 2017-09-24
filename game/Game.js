const Board = require('./Board.js')

pendingGame = false

class Game {

  constructor(player) {
    this.p1 = player
    this.p1.assignID(1)
    this.p2 = null
    this.board = new Board()
    pendingGame = this
    this.activePlayer = player
  }

  assignPieces() {
    [this.p1, this.p2].forEach(player => player.assignPieces())
  }

  startGame() {
    this.assignPieces()
  }

  emit(msg) {
    [this.p1, this.p2].forEach(player => (player.ws.send(msg))
  }

  _playerJoin(player) {
    this.p2 = player
    this.p2.assignID(2)
    return this
  }

  static joinOrCreateGame(player) {
    if (pendingGame) {
      let game = pendingGame._playerJoin(player)
      pendingGame = false
      return game
    }
    let newGame = new Game(player)
    return newGame
  }

  swapPlayer() {
    (this.p1 === this.activePlayer) ? (this.activePlayer = this.p2) : (this.activePlayer = this.p1) // JANK NOTTEEIGH dont be TELLING ME ASSIGNMENT IN A TERNARY IS INAPPROPRIATE THERER ARE NO REACT WARNINGS TO SAVE YOU DAHLNODE
  }

  playerMove(playerID, blockCoordinates) {
    let success = this.board.playerMove(playerID, blockCoordinates)
    if (success)
      this.swapPlayer()
    return success
  }

  toJSONReadyObj() {
    let gameObj = {}
    gameObj.activePlayer = this.activePlayer
    gameObj.players = [this.p1.toJSONReadyObj(), this.p2.toJSONReadyObj()]
    gameObj.board = this.board.toJSONReadyObj()
    return gameObj
  }

  toString() {
    let strBuilder = []
    strBuilder.push(this.p1.toString())
    this.p2 && strBuilder.push(this.p2.toString()) // JANK!
    strBuilder.push(this.board.toString())
    return strBuilder.join('\n')
  }

}

module.exports = Game

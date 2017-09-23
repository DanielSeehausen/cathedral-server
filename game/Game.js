const Board = require('./Board.js')

var pendingGame = false

class Game {

  constructor(player) {
    this.p1 = player
    this.p1.assignID(1)
    this.p2 = null
    this.board = new Board()
    pendingGame = this
  }

  _playerJoin(player) {
    this.p2 = player
    this.p2.assignID(2)
    return this
  }

  static joinOrCreateGame(player) {
    if (pendingGame) {
      let game = pendingGame._playerJoin(player)
      let pendingGame = false
      return game
    }
    return new Game(player)
  }

  toJSONReadyObj() {
    let gameObj = {}
    gameObj['activePlayer'] = false // will be turned to true only for the active player
    gameObj['players'] = [this.p1.toJSONReadyObj(), this.p2.toJSONReadyObj()]
    gameObj['board'] = this.board.toJSONReadyObj()
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

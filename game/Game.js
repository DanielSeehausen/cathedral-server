const Board = require('./Board.js')

var pendingGame = false

class Game {

  constructor(player) {
    this.p1 = player
    this.p1.assignID(1)
    this.board = new Board()
    pendingGame = this
  }

  _playerJoin(player) {
    this.p2 = player
    this.p2.assignID(2)
    return this
  }


  static joinOrCreateGame(player) {
    return (pendingGame) ? pendingGame._playerJoin(player) : new Game(player)
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

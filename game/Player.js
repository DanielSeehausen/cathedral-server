const Piece = require('./Piece.js')

class Player {

  constructor(ip, ws) {
    this.ip = ip
    this.ws = ws
    this.id = null // if toString called before ID assigned. Second player to join always receives 2, first gets 1
    this.pieces = null
  }

  assignPieces() {
    this.pieces = Piece.getAllPieces(player)
  }

  assignID(id) {
    (id === 1 || id === 2) && (this.id = id) // yEUH! Budday heer we go jankmasta
  }

  toJSONReadyObj() {
    return { id: [this.id, this.ip] }
  }

  toString() {
    return `Player IP: ${this.ip}\tPlayer ID: ${this.id}\nPieces: ${this.pieces}`
  }

}


module.exports = Player

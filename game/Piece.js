const PIECE_DICT = {
  house:       [[0, 0]],
  house2:      [[0, 0]],
  rowhouse:    [[0, 0], [1, 0]],
  rowhouse2:   [[0, 0], [1, 0]],
  tenements:   [[0, 0], [1, 0], [1,1]],
  tenements2:  [[0, 0], [1, 0], [1,1]],
  bridge:      [[0, 0], [-1, 0], [1, 0]],
  plaza:       [[0, 0], [0, 1], [1, 0],  [1, 1]],
  school:      [[0, 0], [1, 0], [0, -1], [-1, -1]],
  courthouse:  [[0, 0], [0, -1], [1, 0], [0,1]],
  museum:      [[0, 0], [0, -1], [1, -1], [0,1], [1,1]],
  hospital:    [[0, 0], [0, -1], [-1, 0], [1,0], [0,1]],
  mall:        [[0, 0], [1, -1], [1, 0], [0,1], [-1,1]],
  university:  [[0, 0], [0, -1], [-1, 0], [0,1], [1,-1]],
  
  workshop:    [[0, 0]],
  workshop2:   [[0, 0]],
  forge:       [[0, 0], [1, 0]],
  forge2:      [[0, 0], [1, 0]],
  sawmill:     [[0, 0], [1, 0], [1, -1]],
  sawmill2:    [[0, 0], [1, 0], [1, -1]],
  railbridge:  [[0, 0], [-1, 0], [1, 0]],
  lumberyard:  [[0, 0], [0, 1], [1, 0], [1, 1]],
  warehouse:   [[0, 0], [1, 0], [0, 1], [-1, 1]],
  foundry:     [[0, 0], [0, -1], [1, 0], [0, 1]],
  factory:     [[0, 0], [0, -1], [1, -1], [0, 1], [1, 1]],
  coalplant:   [[0, 0], [0, -1], [-1, 0], [1, 0], [0, 1]],
  ironworks:   [[0, 0], [-1, -1], [0, -1], [1, 0], [1, 1]],
  refinery:    [[0, 0], [0, -1], [-1, 0], [0, 1], [1, 1]]
}

class Piece {

  constructor(player, name, jaunts) {
    this.owner = player
    this.name = name
    this.jaunts = jaunts
    this.played = false
    this.destroyed = false
  }

  static getAllPieces(player) {
    let pieces = []
    for (var [name, jaunts] of Object.entries(PIECE_DICT))
      pieces.push(new Piece(player, name, jaunts))
    return pieces
  }

  toJSONReadyObj() {
    return {
      name: this.name,
      jaunts: this.jaunts,
      played: this.played,
      destroyed: this.destroyed,
    }
  }

  toString() {
    return `Piece: ${this.name}\tPlayerID: ${this.player.id}\tP/D: ${this.played}/${this.destroyed}`
  }
}

module.exports = Piece

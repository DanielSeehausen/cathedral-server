function getDefaultBoard() {
  return (
    [[null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null],
     [null, null, null, null, null, null, null, null, null, null]]
 )
}


class Board {

  constructor() {
    this.board = getDefaultBoard()
  }

  toString() {
    return this.board.reduce((acc, row) => (acc + row.toString() + "\n"), "")
  }

}


module.exports = Board

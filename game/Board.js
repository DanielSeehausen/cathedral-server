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
    this.currPlayer = null
  }

  toJSONReadyObj() {
    return this.board.reduce((acc, row, idx) => (acc[idx] = row), {})
  }

  toString() {
    return this.board.reduce((acc, row) => (acc + row.toString() + "\n"), "")
  }

}


module.exports = Board

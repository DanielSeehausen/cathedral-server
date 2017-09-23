class Player {

  constructor(ip) {
    this.ip = ip
    this.id = null // if toString called before ID assigned
  }

  assignID(id) {
    (id === 1 || id === 2) && (this.id = id) // yEUH! Budday heer we go jankmasta
  }

  toJSONReadyObj() {
    return { 'id': [this.id, this.ip] }
  }

  toString() {
    return `Player IP: ${this.ip}\nPlayer ID: ${this.id}`
  }

}


module.exports = Player

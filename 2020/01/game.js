class Game {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  customMethod() {
    return true;
  }

  parseInfos(raw_data) {}
}

module.exports = Game;
class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    return this.infos.split("").reduce((a, b) => a + (b === "(" ? 1 : -1), 0);
  }

  part_two() {
    let pos = 0;
    for (let i = 0; i < this.infos.length; i++) {
      pos += this.infos[i] === "(" ? 1 : -1;
      if (pos < 0) {
        return i + 1;
      }
    }
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

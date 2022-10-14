class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    return this.infos.split("").reduce((a, b) => a + (b === "(" ? 1 : -1), 0);
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

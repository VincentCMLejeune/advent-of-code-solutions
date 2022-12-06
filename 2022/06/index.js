class AdventOfCode {
  constructor(raw_data) {
    this.code = this.parseInfos(raw_data);
  }

  part_one() {
    for (let i = 0; i < this.code.length - 3; i++) {
      let part = this.code.slice(i, i + 4);
      if (part.length === [...new Set(part)].length) {
        return i + 4;
      }
    }
    throw new Error("Have not found any answer");
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.split("");
  }
}

module.exports = AdventOfCode;

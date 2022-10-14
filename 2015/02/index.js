class AdventOfCode {
  constructor(raw_data) {
    this.boxes = this.parseInfos(raw_data);
  }

  part_one() {
    let total = 0;
    for (let box of this.boxes) {
      let sortedBox = box.sort((a, b) => a - b);
      total +=
        sortedBox[0] * sortedBox[1] * 3 +
        sortedBox[1] * sortedBox[2] * 2 +
        sortedBox[2] * sortedBox[0] * 2;
    }
    return total;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((dimensions) => dimensions.split("x").map(Number));
  }
}

module.exports = AdventOfCode;

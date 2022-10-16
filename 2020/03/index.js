class AdventOfCode {
  constructor(raw_data) {
    this.forest = this.parseInfos(raw_data);
  }

  part_one() {
    let treeCount = 0;
    let j = 0;
    for (let i = 1; i < this.forest.length; i++) {
      j = (j + 3) % this.forest[0].length;
      if (this.forest[i][j] === "#") {
        treeCount++;
      }
    }
    return treeCount;
  }

  part_two() {
    const slopes = [
      [1, 1],
      [3, 1],
      [5, 1],
      [7, 1],
      [1, 2],
    ];
    return slopes
      .map((slope) => this.countTreesInSlope(slope))
      .reduce((a, b) => a * b, 1);
  }

  countTreesInSlope(slope) {
    let treeCount = 0;
    let j = 0;
    for (let i = slope[1]; i < this.forest.length; i += slope[1]) {
      j = (j + slope[0]) % this.forest[0].length;
      if (this.forest[i][j] === "#") {
        treeCount++;
      }
    }
    return treeCount;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(""));
  }
}

module.exports = AdventOfCode;

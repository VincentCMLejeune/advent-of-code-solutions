class AdventOfCode {
  constructor(raw_data) {
    this.nums = this.parseInfos(raw_data);
  }

  part_one() {
    let total = 0;
    this.nums.forEach((line) => {
      total += Math.max(...line) - Math.min(...line);
    });
    return total;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data[0].includes("\t")
      ? raw_data.map((line) => line.split("\t").map(Number))
      : raw_data.map((line) => line.split(" ").map(Number));
  }
}

module.exports = AdventOfCode;

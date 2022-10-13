class AdventOfCode {
  constructor(raw_data) {
    this.numbers = this.parseInfos(raw_data);
  }

  part_one() {
    for (let i = 0; i < this.numbers.length - 1; i++) {
      for (let j = i + 1; j < this.numbers.length; j++) {
        if (this.numbers[i] + this.numbers[j] === 2020) {
          return this.numbers[i] * this.numbers[j];
        }
      }
    }
    throw new Error("No solution found");
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map(Number);
  }
}

module.exports = AdventOfCode;

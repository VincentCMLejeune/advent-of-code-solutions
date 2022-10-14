class AdventOfCode {
  constructor(raw_data) {
    this.numbers = this.parseInfos(raw_data);
  }

  part_one() {
    const numbers = this.numbers[0] + this.numbers[0].charAt(0);
    let total = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] === numbers[i + 1]) {
        total += Number(numbers[i]);
      }
    }
    return total;
  }

  part_two() {
    const step = this.numbers[0].length / 2;
    const numbers = this.numbers[0];
    const len = numbers.length;
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === numbers[(i + step) % len]) {
        total += Number(numbers[i]);
      }
    }
    return total;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

class AdventOfCode {
  constructor(raw_data) {
    this.range = this.parseInfos(raw_data);
  }

  part_one() {
    let count = 0;
    for (let num = this.range.start; num < this.range.end; num++) {
      if (this.hasTwoAdjacentDigits(num)) {
        if (this.hasNoDecreasingDigit(num)) {
          count++;
        }
      }
    }
    return count;
  }

  hasNoDecreasingDigit(num) {
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
      if (str[i] > str[i + 1]) {
        return false;
      }
    }
    return true;
  }

  hasTwoAdjacentDigits(num) {
    let str = String(num);
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        return true;
      }
    }
    return false;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return {
      start: Number(raw_data.split("-")[0]),
      end: Number(raw_data.split("-")[1]),
    };
  }
}

module.exports = AdventOfCode;

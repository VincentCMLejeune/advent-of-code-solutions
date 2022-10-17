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
    let count = 0;
    for (let num = this.range.start; num < this.range.end; num++) {
      if (this.hasOnlyTwoAdjacentDigits(num)) {
        if (this.hasNoDecreasingDigit(num)) {
          count++;
        }
      }
    }
    return count;
  }

  hasOnlyTwoAdjacentDigits(num) {
    let str = "*" + String(num) + "*";
    for (let i = 1; i < str.length - 2; i++) {
      if (str[i] === str[i + 1]) {
        if (str[i] !== str[i - 1] && str[i] !== str[i + 2]) {
          return true;
        }
      }
    }
    return false;
  }

  parseInfos(raw_data) {
    return {
      start: Number(raw_data.split("-")[0]),
      end: Number(raw_data.split("-")[1]),
    };
  }
}

module.exports = AdventOfCode;

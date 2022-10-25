class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let validCount = 0;
    for (let line of this.infos) {
      validCount += this.validateLine(line);
    }
    return validCount;
  }

  validateLine(line) {
    let isInCurlyBraces = false;
    let hasValidString = false;
    for (let i = 0; i < line.length - 3; i++) {
      if (line[i] === "[") {
        isInCurlyBraces = true;
      } else if (line[i] === "]") {
        isInCurlyBraces = false;
      } else {
        if (this.isStrValid(line.substring(i, i + 4))) {
          if (isInCurlyBraces) return 0;
          hasValidString = true;
        }
      }
    }
    return hasValidString ? 1 : 0;
  }

  isStrValid(str) {
    return str[0] === str[3] && str[1] === str[2] && str[0] !== str[1];
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

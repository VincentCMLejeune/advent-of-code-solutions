class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let res = 0;
    for (let line of this.infos) {
      let calibration = this.getFirstDigit(line) + this.getLastDigit(line);
      res += Number(calibration);
    }
    return res;
  }

  getFirstDigit(line) {
    for (let i = 0; i < line.length; i++) {
      let char = line[i];
      if (char === char.toUpperCase()) {
        return char;
      }
    }
    throw new Error(`Could not find a number in line: ${line.join("")}`);
  }

  getLastDigit(line) {
    for (let i = line.length - 1; i >= 0; i--) {
      let char = line[i];
      if (char === char.toUpperCase()) {
        return char;
      }
    }
    throw new Error(`Could not find a number in line: ${line.join("")}`);
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(""));
  }
}

module.exports = AdventOfCode;

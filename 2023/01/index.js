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
    let res = 0;
    for (let line of this.infos) {
      console.log(line.join(""));
      console.log(this.getFirstNumOrLitteralDigit(line));
      console.log(this.getLastNumOrLitteralDigit(line));
      let calibration =
        this.getFirstNumOrLitteralDigit(line) +
        this.getLastNumOrLitteralDigit(line);
      console.log(calibration);
      res += Number(calibration);
    }
    return res;
  }

  getFirstNumOrLitteralDigit(line) {
    for (let i = 0; i < line.length; i++) {
      const isLitteralNum = this.isLitteralNum(line, i);
      if (isLitteralNum) return isLitteralNum;
      let char = line[i];
      if (char === char.toUpperCase()) return char;
    }
    throw new Error(`Could not find a number in line: ${line.join("")}`);
  }

  getLastNumOrLitteralDigit(line) {
    for (let i = line.length - 1; i >= 0; i--) {
      const isLitteralNum = this.isLitteralNum(line, i);
      if (isLitteralNum) return isLitteralNum;
      let char = line[i];
      if (char === char.toUpperCase()) return char;
    }
    throw new Error(`Could not find a number in line: ${line.join("")}`);
  }

  isLitteralNum(line, i) {
    // Out of range risk, will check after
    // Risk didn't materialize, yay
    if (line[i] === "o") {
      if (line[i + 1] === "n") {
        if (line[i + 2] === "e") {
          return "1";
        }
      }
    }
    if (line[i] === "t") {
      if (line[i + 1] === "w") {
        if (line[i + 2] === "o") {
          return "2";
        }
      }
    }
    if (line[i] === "t") {
      if (line[i + 1] === "h") {
        if (line[i + 2] === "r") {
          if (line[i + 3] === "e") {
            if (line[i + 4] === "e") {
              return "3";
            }
          }
        }
      }
    }
    if (line[i] === "f") {
      if (line[i + 1] === "o") {
        if (line[i + 2] === "u") {
          if (line[i + 3] === "r") {
            return "4";
          }
        }
      }
    }
    if (line[i] === "f") {
      if (line[i + 1] === "i") {
        if (line[i + 2] === "v") {
          if (line[i + 3] === "e") {
            return "5";
          }
        }
      }
    }
    if (line[i] === "s") {
      if (line[i + 1] === "i") {
        if (line[i + 2] === "x") {
          return "6";
        }
      }
    }
    if (line[i] === "s") {
      if (line[i + 1] === "e") {
        if (line[i + 2] === "v") {
          if (line[i + 3] === "e") {
            if (line[i + 4] === "n") {
              return "7";
            }
          }
        }
      }
    }
    if (line[i] === "e") {
      if (line[i + 1] === "i") {
        if (line[i + 2] === "g") {
          if (line[i + 3] === "h") {
            if (line[i + 4] === "t") {
              return "8";
            }
          }
        }
      }
    }
    if (line[i] === "n") {
      if (line[i + 1] === "i") {
        if (line[i + 2] === "n") {
          if (line[i + 3] === "e") {
            return "9";
          }
        }
      }
    }
    return undefined;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(""));
  }
}

module.exports = AdventOfCode;

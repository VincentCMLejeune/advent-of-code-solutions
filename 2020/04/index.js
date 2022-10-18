class AdventOfCode {
  constructor(raw_data) {
    this.passes = this.parseInfos(raw_data);
  }

  part_one() {
    let validPassesCount = 0;
    const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    this.passes.forEach((pass) => {
      validPassesCount += requiredFields.every((field) => pass[field]) ? 1 : 0;
    });
    return validPassesCount;
  }

  part_two() {
    let validPassesCount = 0;
    this.passes.forEach((pass) => {
      if (this.hasAllRequiredFields(pass)) {
        if (this.validByr(pass)) {
          if (this.validIyr(pass)) {
            if (this.validEyr(pass)) {
              if (this.validHgt(pass)) {
                if (this.validHcl(pass)) {
                  if (this.validEcl(pass)) {
                    if (this.validPid(pass)) {
                      validPassesCount++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
    return validPassesCount;
  }

  validPid(pass) {
    const nums = "0123456789".split("");
    return (
      pass.pid.length === 9 &&
      pass.pid.split("").every((char) => nums.indexOf(char) !== -1)
    );
  }

  validEcl(pass) {
    const validEcl = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    return validEcl.indexOf(pass.ecl) !== -1;
  }

  validHcl(pass) {
    const validHclChar = "0123456789abcdef".split("");
    return (
      pass.hcl.length === 7 &&
      pass.hcl[0] === "#" &&
      pass.hcl
        .substring(1)
        .split("")
        .every((char) => validHclChar.indexOf(char) !== -1)
    );
  }

  validHgt(pass) {
    if (pass.hgt.endsWith("cm")) {
      let size = Number(pass.hgt.split("cm")[0]);
      return size >= 150 && size <= 193;
    } else if (pass.hgt.endsWith("in")) {
      let size = Number(pass.hgt.split("in")[0]);
      return size >= 59 && size <= 76;
    }
    return false;
  }

  validEyr(pass) {
    return pass.eyr >= 2020 && pass.eyr <= 2030;
  }

  validIyr(pass) {
    return pass.iyr >= 2010 && pass.iyr <= 2020;
  }

  validByr(pass) {
    return pass.byr >= 1920 && pass.byr <= 2002;
  }

  hasAllRequiredFields(pass) {
    const requiredFields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
    return requiredFields.every((field) => pass[field]);
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    let currentPass = {};
    raw_data.forEach((line) => {
      if (line === "") {
        parsed_data.push(currentPass);
        currentPass = {};
      } else {
        line.split(" ").forEach((elem) => {
          const [elemKey, elemValue] = elem.split(":");
          currentPass[elemKey] = elemValue;
        });
      }
    });
    parsed_data.push(currentPass);
    return parsed_data;
  }
}

module.exports = AdventOfCode;

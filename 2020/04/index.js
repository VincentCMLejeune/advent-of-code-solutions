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
    return true;
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

class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let validCount = 0;
    for (let info of this.infos) {
      const count = info.password.filter(
        (letter) => letter === info.letter
      ).length;
      if (count >= info.first && count <= info.second) {
        validCount++;
      }
    }
    return validCount;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsedData = [];
    for (let row of raw_data) {
      const parsedRow = {};
      row = row.split(": ");
      const start = row[0].split(" ");
      const range = start[0].split("-");
      parsedRow.first = parseInt(range[0]);
      parsedRow.second = parseInt(range[1]);
      parsedRow.letter = start[1];
      parsedRow.password = row[1].split("");
      parsedData.push(parsedRow);
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

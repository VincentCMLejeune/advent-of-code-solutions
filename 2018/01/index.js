class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let total = 0;
    this.infos.forEach((info) => {
      if (info.operator === "+") {
        total += info.value;
      } else if (info.operator === "-") {
        total -= info.value;
      }
    });
    return total;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => {
      return {
        operator: line[0],
        value: Number(line.slice(1)),
      };
    });
  }
}

module.exports = AdventOfCode;

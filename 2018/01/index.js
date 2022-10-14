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
    let total = 0;
    const frequencies = [0];
    for (let i = 0; i < 1000; i++) {
      for (let info of this.infos) {
        if (info.operator === "+") {
          total += info.value;
        } else if (info.operator === "-") {
          total -= info.value;
        }
        if (frequencies.includes(total)) {
          return total;
        } else {
          frequencies.push(total);
        }
      }
    }
    throw new Error("No double found in 1000 iterations");
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

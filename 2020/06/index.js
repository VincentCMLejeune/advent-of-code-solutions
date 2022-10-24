class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    // console.log(this.infos);
    let count = 0;
    for (let line of this.infos) {
      count += [...new Set(line.join("").split(""))].length;
    }
    return count;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsed_Data = [];
    let curData = [];
    for (let line of raw_data) {
      if (line === "") {
        parsed_Data.push(curData);
        curData = [];
      } else {
        curData.push(line);
      }
    }
    parsed_Data.push(curData);
    return parsed_Data;
  }
}

module.exports = AdventOfCode;

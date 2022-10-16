class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let noDuplicatesCount = 0;
    this.infos.forEach((line) => {
      noDuplicatesCount += this.haveNoDuplicates(line);
    });
    return noDuplicatesCount;
  }

  haveNoDuplicates(arr) {
    return arr.length === [...new Set(arr)].length ? 1 : 0;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(" "));
  }
}

module.exports = AdventOfCode;

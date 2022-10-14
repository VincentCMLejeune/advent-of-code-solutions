class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    return this.infos.filter((arr) => this.canTriangle(arr)).length;
  }

  canTriangle(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] + arr[1] > arr[2];
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) =>
      line
        .split(" ")
        .filter((elem) => elem !== "")
        .map(Number)
    );
  }
}

module.exports = AdventOfCode;

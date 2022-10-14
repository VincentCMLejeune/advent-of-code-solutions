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
    const verticalData = this.verticalize(this.infos);
    return verticalData.filter((arr) => this.canTriangle(arr)).length;
  }

  verticalize(data) {
    const newData = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < data.length; j += 3) {
        newData.push([data[j][i], data[j + 1][i], data[j + 2][i]]);
      }
    }
    return newData;
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

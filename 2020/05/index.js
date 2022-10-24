class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    const lines = [];
    for (let info of this.infos) {
      const row = this.getRow(info.slice(0, 7));
      let line = this.getLine(info.slice(7));
      lines.push(row * 8 + line);
    }
    return Math.max(...lines);
  }

  getRow(arr) {
    let min = 0;
    let max = 127;
    for (let i = 0; i < 7; i++) {
      let val = Math.pow(2, 6 - i);
      if (arr[i] === "B") {
        min += val;
      } else if (arr[i] === "F") {
        max -= val;
      }
    }
    return min;
  }

  getLine(arr) {
    let min = 0;
    let max = 127;
    for (let i = 0; i < 3; i++) {
      let val = Math.pow(2, 2 - i);
      if (arr[i] === "R") {
        min += val;
      } else if (arr[i] === "L") {
        max -= val;
      }
    }
    return min;
  }

  part_two() {
    const lines = [];
    for (let info of this.infos) {
      const row = this.getRow(info.slice(0, 7));
      let line = this.getLine(info.slice(7));
      lines.push(row * 8 + line);
    }
    for (let i = 13; i <= 880; i++) {
      if (lines.indexOf(i) === -1) {
        return i;
      }
    }
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(""));
  }
}

module.exports = AdventOfCode;

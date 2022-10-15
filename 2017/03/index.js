class AdventOfCode {
  constructor(raw_data) {
    this.range = this.parseInfos(raw_data);
  }

  part_one() {
    let curPos = { x: 0, y: 0 };
    let curNum = 1;
    let step = 1;
    let curDir = "r";
    let dirObj = {
      r: "u",
      u: "l",
      l: "d",
      d: "r",
    };
    let firstMove = true;
    while (curNum < this.range) {
      for (let i = 0; i < step; i++) {
        curNum++;
        if (curDir === "r") {
          curPos.x++;
        } else if (curDir === "u") {
          curPos.y++;
        } else if (curDir === "l") {
          curPos.x--;
        } else if (curDir === "d") {
          curPos.y--;
        } else {
          throw new Error("Invalid direction");
        }
        if (curNum === this.range) {
          break;
        }
      }
      curDir = dirObj[curDir];
      if (firstMove) {
        firstMove = false;
      } else {
        step++;
        firstMove = true;
      }
    }
    return Math.abs(curPos.x) + Math.abs(curPos.y);
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return Number(raw_data);
  }
}

module.exports = AdventOfCode;

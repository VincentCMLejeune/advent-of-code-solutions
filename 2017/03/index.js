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
    let curPos = { x: 0, y: 0 };
    let valuesMap = {
      0: {
        0: 1,
      },
    };
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
        curNum = this.calculateNewNum(valuesMap, curPos);
        if (valuesMap[curPos.x]) {
          valuesMap[curPos.x][curPos.y] = curNum;
        } else {
          valuesMap[curPos.x] = {};
          valuesMap[curPos.x][curPos.y] = curNum;
        }
        if (curNum > this.range) {
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
    return curNum;
  }

  calculateNewNum(valuesMap, position) {
    let num = 0;
    for (let i = position.x - 1; i <= position.x + 1; i++) {
      for (let j = position.y - 1; j <= position.y + 1; j++) {
        if (valuesMap[i]) {
          if (valuesMap[i][j]) {
            num += valuesMap[i][j];
          }
        }
      }
    }
    return num;
  }

  parseInfos(raw_data) {
    return Number(raw_data);
  }
}

module.exports = AdventOfCode;

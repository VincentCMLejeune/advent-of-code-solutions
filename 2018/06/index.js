class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.ranges = this.getRanges(this.infos);
    this.numbersMap = this.drawMap(this.ranges);
  }

  part_one() {
    for (let i = 0; i < this.ranges.x; i++) {
      for (let j = 0; j < this.ranges.y; j++) {
        if (this.numbersMap[i][j] !== ".") {
          continue;
        } else {
          this.numbersMap[i][j] = this.findClosestNumber(i, j);
        }
      }
    }

    const possibleNumbers = this.eliminateBorderingNumbers();
    let maxArea = -Infinity;
    for (let number of possibleNumbers) {
      maxArea = Math.max(maxArea, this.countNumbers(number));
    }
    return maxArea;
  }

  countNumbers(number) {
    let allValues = [...this.numbersMap].flat();
    return allValues.filter((char) => char === number).length;
  }

  eliminateBorderingNumbers() {
    let borderingNumbers = [];
    for (let i = 0; i < this.ranges.x; i++) {
      borderingNumbers.push(this.numbersMap[i][0]);
      borderingNumbers.push(this.numbersMap[i][this.ranges.y - 1]);
    }
    for (let j = 0; j < this.ranges.y; j++) {
      borderingNumbers.push(this.numbersMap[0][j]);
      borderingNumbers.push(this.numbersMap[this.ranges.x - 1][j]);
    }
    borderingNumbers = [...new Set(borderingNumbers)];
    const remainingNumbers = [];
    for (let info of this.infos) {
      let curKey = info.key;
      if (borderingNumbers.indexOf(curKey) === -1) {
        remainingNumbers.push(curKey);
      }
    }
    return remainingNumbers;
  }

  findClosestNumber(i, j) {
    let minDist = Infinity;
    let closestNumber = ".";
    let draw = false;
    for (let info of this.infos) {
      let curDist = Math.abs(i - info.value[0]) + Math.abs(j - info.value[1]);
      if (curDist === minDist) {
        draw = true;
      } else if (curDist < minDist) {
        draw = false;
        minDist = curDist;
        closestNumber = info.key;
      }
    }
    return draw ? "." : closestNumber;
  }

  drawMap(ranges) {
    let numberMap = [];
    for (let i = 0; i < ranges.x; i++) {
      let row = [];
      for (let j = 0; j < ranges.y; j++) {
        row.push(".");
      }
      numberMap.push(row);
    }
    for (let info of this.infos) {
      numberMap[info.value[0]][info.value[1]] = info.key;
    }
    return numberMap;
  }

  getRanges(infos) {
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (let info of infos) {
      maxX = Math.max(info.value[0], maxX);
      maxY = Math.max(info.value[1], maxY);
    }
    return { x: maxX + 1, y: maxY + 1 };
  }

  part_two(maxDist) {
    let count = 0;
    for (let i = 0; i < this.ranges.x; i++) {
      for (let j = 0; j < this.ranges.y; j++) {
        if (this.getDist(i, j) < maxDist) {
          this.numbersMap[i][j] = "#";
          count++;
        }
      }
    }
    return count;
  }

  getDist(i, j) {
    let totalDist = 0;
    for (let line of this.infos) {
      totalDist += Math.abs(i - line.value[0]) + Math.abs(j - line.value[1]);
    }
    return totalDist;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let i = 0; i < raw_data.length; i++) {
      const key = i;
      let value = raw_data[i].split(", ").map(Number);
      parsed_data.push({ key, value });
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

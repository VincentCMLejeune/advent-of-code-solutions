class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.ranges = this.getRanges(this.infos);
    this.numbersMap = this.drawMap(this.ranges);
  }

  part_one() {
    // console.log(this.infos);
    // console.log(this.ranges);
    // console.log(this.numbersMap);
    for (let i = 0; i < this.ranges.x; i++) {
      for (let j = 0; j < this.ranges.y; j++) {
        // console.log(this.numbersMap[i][j])
        if (this.numbersMap[i][j] !== ".") {
          continue;
        } else {
          this.numbersMap[i][j] = this.findClosestNumber(i, j);
        }
      }
    }

    // for (let line of this.numbersMap) {
    //   console.log(line.join(""));
    // }

    const possibleNumbers = this.eliminateBorderingNumbers();
    // console.log(possibleNumbers);
    let maxArea = -Infinity;
    for (let number of possibleNumbers) {
      maxArea = Math.max(maxArea, this.countNumbers(number));
    }
    console.log(maxArea);
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
    borderingNumbers = [...new Set(borderingNumbers)]
    // console.log(borderingNumbers);
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
      // console.log(info);
      let curDist = Math.abs(i - info.value[0]) + Math.abs(j - info.value[1]);
      // console.log(curDist);
      if (curDist === minDist) {
        draw = true;
      } else if (curDist < minDist) {
        draw = false;
        minDist = curDist;
        closestNumber = info.key;
      }
    }

    // console.log(
    //   `Coordinates ${i}/${j}, closest number ${closestNumber} at distance ${minDist}`
    // );
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

  part_two() {
    return true;
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

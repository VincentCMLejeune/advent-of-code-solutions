class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    this.draw_first_line();
    let minDist = Infinity;
    const secondLine = this.infos[1];
    const linePos = {
      x: 0,
      y: 0,
    };
    for (let line of secondLine) {
      switch (line.direction) {
        case "U":
          for (let i = 1; i <= line.distance; i++) {
            linePos.y++;
            minDist = this.doesItCrossesFirstLine(minDist, linePos);
          }
          break;
        case "D":
          for (let i = 1; i <= line.distance; i++) {
            linePos.y--;
            minDist = this.doesItCrossesFirstLine(minDist, linePos);
          }
          break;
        case "L":
          for (let i = 1; i <= line.distance; i++) {
            linePos.x--;
            minDist = this.doesItCrossesFirstLine(minDist, linePos);
          }
          break;
        case "R":
          for (let i = 1; i <= line.distance; i++) {
            linePos.x++;
            minDist = this.doesItCrossesFirstLine(minDist, linePos);
          }
          break;
      }
    }
    return minDist;
  }

  doesItCrossesFirstLine(minDist, linePos) {
    if (this.firstLineMap[linePos.y]) {
      if (this.firstLineMap[linePos.y][linePos.x]) {
        return Math.min(minDist, Math.abs(linePos.x) + Math.abs(linePos.y));
      }
    }
    return minDist;
  }

  draw_first_line() {
    let lineMap = {
      0: {
        0: true,
      },
    };
    const linePos = {
      x: 0,
      y: 0,
    };
    const firstLine = this.infos[0];
    for (let line of firstLine) {
      switch (line.direction) {
        case "U":
          for (let i = 1; i <= line.distance; i++) {
            linePos.y++;
            lineMap = this.addPosToMap(linePos, lineMap);
          }
          break;
        case "D":
          for (let i = 1; i <= line.distance; i++) {
            linePos.y--;
            lineMap = this.addPosToMap(linePos, lineMap);
          }
          break;
        case "L":
          for (let i = 1; i <= line.distance; i++) {
            linePos.x--;
            lineMap = this.addPosToMap(linePos, lineMap);
          }
          break;
        case "R":
          for (let i = 1; i <= line.distance; i++) {
            linePos.x++;
            lineMap = this.addPosToMap(linePos, lineMap);
          }
          break;
      }
    }
    this.firstLineMap = lineMap;
  }

  addPosToMap(linePos, lineMap) {
    lineMap[linePos.y] = lineMap[linePos.y] || {};
    lineMap[linePos.y][linePos.x] = true;
    return lineMap;
  }

  part_two() {
    this.draw_first_line_with_dist();
    let minDist = Infinity;
    const secondLine = this.infos[1];
    const linePos = {
      x: 0,
      y: 0,
    };
    let steps = 0;
    for (let line of secondLine) {
      switch (line.direction) {
        case "U":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.y++;
            minDist = this.doesItCrossesFirstLineWithDist(
              minDist,
              linePos,
              steps
            );
          }
          break;
        case "D":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.y--;
            minDist = this.doesItCrossesFirstLineWithDist(
              minDist,
              linePos,
              steps
            );
          }
          break;
        case "L":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.x--;
            minDist = this.doesItCrossesFirstLineWithDist(
              minDist,
              linePos,
              steps
            );
          }
          break;
        case "R":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.x++;
            minDist = this.doesItCrossesFirstLineWithDist(
              minDist,
              linePos,
              steps
            );
          }
          break;
      }
    }
    return minDist;
  }

  doesItCrossesFirstLineWithDist(minDist, linePos, steps) {
    if (this.firstLineMapWithDist[linePos.y]) {
      let distFirst = this.firstLineMapWithDist[linePos.y][linePos.x];
      if (distFirst) {
        return Math.min(minDist, distFirst + steps);
      }
    }
    return minDist;
  }

  draw_first_line_with_dist() {
    let lineMap = {
      0: {
        0: true,
      },
    };
    const linePos = {
      x: 0,
      y: 0,
    };
    let steps = 0;
    const firstLine = this.infos[0];
    for (let line of firstLine) {
      switch (line.direction) {
        case "U":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.y++;
            lineMap = this.addStepsToMap(linePos, lineMap, steps);
          }
          break;
        case "D":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.y--;
            lineMap = this.addStepsToMap(linePos, lineMap, steps);
          }
          break;
        case "L":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.x--;
            lineMap = this.addStepsToMap(linePos, lineMap, steps);
          }
          break;
        case "R":
          for (let i = 1; i <= line.distance; i++) {
            steps++;
            linePos.x++;
            lineMap = this.addStepsToMap(linePos, lineMap, steps);
          }
          break;
      }
    }
    this.firstLineMapWithDist = lineMap;
  }

  addStepsToMap(linePos, lineMap, steps) {
    lineMap[linePos.y] = lineMap[linePos.y] || {};
    lineMap[linePos.y][linePos.x] = steps;
    return lineMap;
  }

  parseInfos(raw_data) {
    const parsedData = [];
    for (let lines of raw_data) {
      lines = lines.split(",");
      const parsedLine = [];
      for (let line of lines) {
        const direction = line[0];
        const distance = parseInt(line.slice(1));
        parsedLine.push({ direction, distance });
      }
      parsedData.push(parsedLine);
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

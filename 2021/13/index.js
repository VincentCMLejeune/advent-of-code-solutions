class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  fold() {
    let map = [...this.infos.map];
    for (let fold of this.infos.folds) {
      if (fold["dir"] === "y") {
        map = this.verticalFold(map, fold["len"]);
      } else if (fold["dir"] === "x") {
        map = this.horizontalFold(map, fold["len"]);
      } else {
        throw new Error("Fold instructions missing");
      }
    }
    this.printMap(map);
  }

  foldOnce() {
    let map = [...this.infos.map];
    let fold = this.infos.folds[0];
    if (fold["dir"] === "y") {
      map = this.verticalFold(map, fold["len"]);
    } else if (fold["dir"] === "x") {
      map = this.horizontalFold(map, fold["len"]);
    } else {
      throw new Error("Fold instructions missing");
    }
    return this.countDots(map);
  }

  countDots(map) {
    return map.flat().filter((i) => i === "#").length;
  }

  horizontalFold(map, line) {
    let leftSide = [];
    let rightSide = [];
    for (let row of map) {
      leftSide.push(row.slice(0, line));
      rightSide.push(row.slice(line + 1));
    }
    for (let i = 0; i < rightSide.length; i++) {
      for (let j = 0; j < rightSide[0].length; j++) {
        if (leftSide[i][line - 1 - j] === "#" || rightSide[i][j] === "#") {
          leftSide[i][line - 1 - j] = "#";
        }
      }
    }
    return leftSide;
  }

  verticalFold(map, line) {
    let upSide = map.slice(0, line);
    let downSide = map.slice(line + 1);
    for (let i = 0; i < downSide.length; i++) {
      for (let j = 0; j < downSide[0].length; j++) {
        if (upSide[line - 1 - i][j] === "#" || downSide[i][j] === "#") {
          upSide[line - 1 - i][j] = "#";
        }
      }
    }
    return upSide;
  }

  printMap(map) {
    console.log("---MAP---");
    for (let row of map) {
      console.log(row.join(""));
    }
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsed_data = {
      map: [],
      folds: [],
    };
    let x = [];
    let y = [];
    let sliceIdx = raw_data.indexOf("");
    for (let i = 0; i < sliceIdx; i++) {
      let newDot = raw_data[i].split(",");
      x.push(Number(newDot[0]));
      y.push(Number(newDot[1]));
    }
    for (let i = 0; i <= Math.max(...y); i++) {
      let row = [];
      for (let j = 0; j <= Math.max(...x); j++) {
        row.push(".");
      }
      parsed_data.map.push(row);
    }
    for (let i = 0; i < x.length; i++) {
      parsed_data.map[y[i]][x[i]] = "#";
    }
    for (let i = sliceIdx + 1; i < raw_data.length; i++) {
      let fold = raw_data[i].split("=");
      parsed_data.folds.push({
        dir: fold[0].split("fold along ")[1],
        len: Number(fold[1]),
      });
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

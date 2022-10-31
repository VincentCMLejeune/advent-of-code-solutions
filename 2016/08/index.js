class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.screen = this.drawScreen();
  }

  part_one() {
    for (let action of this.infos) {
      switch (action.action) {
        case "draw":
          this.draw(action.wid, action.hei);
          break;
        case "rotate row":
          this.rotateRow(action.origin, action.range);
          break;
        case "rotate column":
          this.rotateColumn(action.origin, action.range);
          break;
        default:
          throw new Error(`Instruction not recognised : ${action}`);
      }
    }
    return this.countPixels();
  }

  drawMap() {
    for (let line of this.screen) {
      console.log(line.join(""));
    }
  }

  rotateColumn(origin, range) {
    // console.log(`Rotate ${range}, column ${origin}`);
    const curColumn = [];
    for (let i = 0; i < 6; i++) {
      curColumn.push(this.screen[i][origin]);
    }
    for (let i = 0; i < range; i++) {
      curColumn.unshift("!");
    }
    for (let i = 0; i < range; i++) {
      curColumn[i] = curColumn[i + 6];
    }
    for (let i = 0; i < range; i++) {
      curColumn.pop();
    }
    for (let i = 0; i < curColumn.length; i++) {
      this.screen[i][origin] = curColumn[i];
    }
  }

  rotateRow(origin, range) {
    // console.log(`Rotate ${range}, row ${origin}`);
    const curRow = this.screen[origin];
    for (let i = 0; i < range; i++) {
      curRow.unshift("!");
    }
    for (let i = 0; i < range; i++) {
      curRow[i] = curRow[i + 50];
    }
    for (let i = 0; i < range; i++) {
      curRow.pop();
    }
    for (let i = 0; i < curRow.length; i++) {
      this.screen[origin][i] = curRow[i];
    }
  }

  draw(wid, hei) {
    // console.log(`Draw ${wid}x${hei}`);
    for (let y = 0; y < hei; y++) {
      for (let x = 0; x < wid; x++) {
        this.screen[y][x] = "#";
      }
    }
  }

  countPixels() {
    return this.screen.flat().filter((elem) => elem === "#").length;
  }

  part_two() {
    this.part_one()
  }

  drawScreen() {
    const screen = [];
    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 50; j++) {
        row.push(".");
      }
      screen.push(row);
    }
    return screen;
  }

  parseInfos(raw_data) {
    const parsedData = [];
    for (let line of raw_data) {
      const obj = {};
      line = line.split(" ");
      if (line[0] === "rect") {
        obj.action = "draw";
        let area = line[1].split("x");
        obj.wid = Number(area[0]);
        obj.hei = Number(area[1]);
      } else if (line[1] === "row") {
        obj.action = "rotate row";
        obj.origin = Number(line[2].split("=")[1]);
        obj.range = Number(line[4]);
      } else if (line[1] === "column") {
        obj.action = "rotate column";
        obj.origin = Number(line[2].split("=")[1]);
        obj.range = Number(line[4]);
      } else {
        throw new Error(`Parsing error met : ${line}`);
      }
      parsedData.push(obj);
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

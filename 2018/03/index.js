class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let fabric = this.drawFabric();
    for (let line of this.infos) {
      for (let i = line.start[0]; i < line.start[0] + line.range[0]; i++) {
        for (let j = line.start[1]; j < line.start[1] + line.range[1]; j++) {
          fabric[i][j] += 1;
        }
      }
    }
    return this.countDoubles(fabric);
  }

  countDoubles(arr) {
    return arr.flat().filter((num) => num > 1).length;
  }

  part_two() {
    return true;
  }

  drawFabric() {
    let range;
    if (this.infos.length < 100) {
      range = 10;
    } else {
      range = 1000;
    }
    const fabric = [];
    for (let i = 0; i < range; i++) {
      const line = [];
      for (let j = 0; j < range; j++) {
        line.push(0);
      }
      fabric.push(line);
    }
    return fabric;
  }

  parseInfos(raw_data) {
    const parsedData = [];
    for (let line of raw_data) {
      let parsedLine = {};
      line = line.split(" @ ");
      parsedLine.id = line[0];
      let coordinates = line[1].split(": ");
      parsedLine.start = coordinates[0].split(",").map(Number);
      parsedLine.range = coordinates[1].split("x").map(Number);
      parsedData.push(parsedLine);
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

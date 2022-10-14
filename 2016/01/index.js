class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
  }

  part_one() {
    const cityMap = {
      x: 0,
      y: 0,
    };
    let dir = "N";
    const compass = {
      N: {
        L: "W",
        R: "E",
      },
      E: {
        L: "N",
        R: "S",
      },
      S: {
        L: "E",
        R: "W",
      },
      W: {
        L: "S",
        R: "N",
      },
    };
    for (let instruction of this.instructions) {
      dir = compass[dir][instruction.direction];
      switch (dir) {
        case "N":
          cityMap.y += instruction.distance;
          break;
        case "E":
          cityMap.x += instruction.distance;
          break;
        case "S":
          cityMap.y -= instruction.distance;
          break;
        case "W":
          cityMap.x -= instruction.distance;
          break;
      }
    }
    return Math.abs(cityMap.x) + Math.abs(cityMap.y);
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsedData = [];
    for (let row of raw_data.split(", ")) {
      parsedData.push({
        direction: row[0],
        distance: Number(row.slice(1)),
      });
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

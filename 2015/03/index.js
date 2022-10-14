class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
  }

  part_one() {
    let children = 1;
    const santaWasHere = {
      0: {
        0: true,
      },
    };
    const santaLocation = {
      x: 0,
      y: 0,
    };
    for (let instruction of this.instructions) {
      switch (instruction) {
        case "^":
          santaLocation.y--;
          break;
        case "v":
          santaLocation.y++;
          break;
        case "<":
          santaLocation.x--;
          break;
        case ">":
          santaLocation.x++;
          break;
        default:
          throw new Error(
            "Instructions unclear, stuck my dick in the ceiling fan"
          );
      }
      if (!santaWasHere[santaLocation.x]) {
        children++;
        santaWasHere[santaLocation.x] = {};
        santaWasHere[santaLocation.x][santaLocation.y] = true;
      } else if (!santaWasHere[santaLocation.x][santaLocation.y]) {
        children++;
        santaWasHere[santaLocation.x][santaLocation.y] = true;
      }
    }
    return children;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.split("");
  }
}

module.exports = AdventOfCode;

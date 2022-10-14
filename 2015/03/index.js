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
    let children = 1;
    const santasWereHere = {
      0: {
        0: true,
      },
    };
    const santaLocation = {
      x: 0,
      y: 0,
    };
    const roboLocation = {
      x: 0,
      y: 0,
    };
    for (let i = 0; i < this.instructions.length; i += 2) {
      const santaInstruction = this.instructions[i];
      switch (santaInstruction) {
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
      if (!santasWereHere[santaLocation.x]) {
        children++;
        santasWereHere[santaLocation.x] = {};
        santasWereHere[santaLocation.x][santaLocation.y] = true;
      } else if (!santasWereHere[santaLocation.x][santaLocation.y]) {
        children++;
        santasWereHere[santaLocation.x][santaLocation.y] = true;
      }

      const robotInstruction = this.instructions[i + 1];
      switch (robotInstruction) {
        case "^":
          roboLocation.y--;
          break;
        case "v":
          roboLocation.y++;
          break;
        case "<":
          roboLocation.x--;
          break;
        case ">":
          roboLocation.x++;
          break;
        default:
          throw new Error(
            "Instructions unclear, stuck my dick in the ceiling fan"
          );
      }
      if (!santasWereHere[roboLocation.x]) {
        children++;
        santasWereHere[roboLocation.x] = {};
        santasWereHere[roboLocation.x][roboLocation.y] = true;
      } else if (!santasWereHere[roboLocation.x][roboLocation.y]) {
        children++;
        santasWereHere[roboLocation.x][roboLocation.y] = true;
      }
    }
    return children;
  }

  parseInfos(raw_data) {
    return raw_data.split("");
  }
}

module.exports = AdventOfCode;

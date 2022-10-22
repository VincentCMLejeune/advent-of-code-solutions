class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
    this.field = this.drawField();
  }

  part_one() {
    for (let line of this.instructions) {
      switch (line.action) {
        case "on":
          this.turnOn(line.origin, line.destination);
          break;
        case "off":
          this.turnOff(line.origin, line.destination);
          break;
        case "toggle":
          this.toggle(line.origin, line.destination);
          break;
        default:
          throw new Error("Unknown action");
      }
    }
    return this.field.flat().filter((x) => x === 1).length;
  }

  turnOff(origin, destination) {
    for (let i = origin.x; i <= destination.x; i++) {
      for (let j = origin.y; j <= destination.y; j++) {
        this.field[i][j] = 0;
      }
    }
  }

  turnOn(origin, destination) {
    for (let i = origin.x; i <= destination.x; i++) {
      for (let j = origin.y; j <= destination.y; j++) {
        this.field[i][j] = 1;
      }
    }
  }

  toggle(origin, destination) {
    for (let i = origin.x; i <= destination.x; i++) {
      for (let j = origin.y; j <= destination.y; j++) {
        this.field[i][j] = this.field[i][j] === 0 ? 1 : 0;
      }
    }
  }

  part_two() {
    return true;
  }

  drawField() {
    let field = [];
    for (let i = 0; i < 1000; i++) {
      let row = [];
      for (let j = 0; j < 1000; j++) {
        row.push(0);
      }
      field.push(row);
    }
    return field;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      line = line.split(" ");
      let destination = line.pop().split(",");
      line.pop();
      let origin = line.pop().split(",");
      let action = line.pop();
      parsed_data.push({
        action,
        origin: {
          x: Number(origin[0]),
          y: Number(origin[1]),
        },
        destination: {
          x: Number(destination[0]),
          y: Number(destination[1]),
        },
      });
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

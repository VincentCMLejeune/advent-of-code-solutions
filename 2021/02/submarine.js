class Submarine {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  navigate() {
    let x = 0;
    let depth = 0;
    for (let row of this.infos) {
      switch (row['command']) {
        case "forward":
          x += row['value'];
          break;
        case "up":
          depth -= row['value'];
          break;
        case "down":
          depth += row['value'];
          break;
        default:
          throw new Error("Wrong command");
      }
    }
    return x * depth;
  }

  parseInfos(raw_data) {
    let arr = [];
    for (let row of raw_data) {
      let instruction = row.split(" ");
      arr.push({ command: instruction[0], value: Number(instruction[1]) });
    }
    return arr;
  }
}

module.exports = Submarine;

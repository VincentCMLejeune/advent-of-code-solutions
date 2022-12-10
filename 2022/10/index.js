class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
    this.x = 1;
    this.cycle = 1;
    this.crt = [];
    this.sprite = 1;
    this.pixel = 0;
  }

  part_one() {
    let sum = 0;
    while (this.instructions.length !== 0) {
      let instruction = this.instructions.shift();
      this.cycle++;
      sum += this.checkCycle();
      if (instruction.op === "addx") {
        this.x += instruction.len;
        this.cycle++;
        sum += this.checkCycle();
      }
    }
    return sum;
  }

  checkCycle() {
    const cyclesToCheck = [20, 60, 100, 140, 180, 220];
    if (cyclesToCheck.includes(this.cycle)) {
      return this.cycle * this.x;
    }
    return 0;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => {
      line = line.split(" ");
      if (line.length === 1) {
        return { op: line[0] };
      } else {
        return {
          op: line[0],
          len: Number(line[1]),
        };
      }
    });
  }
}

module.exports = AdventOfCode;

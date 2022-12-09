class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
    this.head = { x: 0, y: 0 };
    this.tail = { x: 0, y: 0 };
    this.tail_history = ["0,0"];
  }

  part_one() {
    for (let instruction of this.instructions) {
      for (let i = 0; i < instruction.len; i++) {
        this.moveHead(instruction.dir);
      }
    }

    return [...new Set(this.tail_history)].length;
  }

  moveHead(direction) {
    if (direction === "R") {
      this.head.x++;
    } else if (direction === "L") {
      this.head.x--;
    } else if (direction === "U") {
      this.head.y++;
    } else if (direction === "D") {
      this.head.y--;
    } else {
      throw new Error(`Did not recognise ${instruction.dir}`);
    }
    this.checkMoveTail();
  }

  checkMoveTail() {
    if (Math.abs(this.head.x - this.tail.x) >= 2) {
      if (this.head.x - this.tail.x > 0) {
        this.tail.x++;
      } else {
        this.tail.x--;
      }
      this.tail.y = this.head.y;
      this.tail_history.push(`${this.tail.x},${this.tail.y}`);
    } else if (Math.abs(this.head.y - this.tail.y) >= 2) {
      if (this.head.y - this.tail.y > 0) {
        this.tail.y++;
      } else {
        this.tail.y--;
      }
      this.tail.x = this.head.x;
      this.tail_history.push(`${this.tail.x},${this.tail.y}`);
    }
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      line = line.split(" ");
      const dir = line[0];
      const len = Number(line[1]);
      parsed_data.push({ dir, len });
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

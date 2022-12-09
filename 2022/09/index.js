class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
    this.head = { x: 0, y: 0 };
    this.tail = { x: 0, y: 0 };
    this.ropes = {
      0: { x: 0, y: 0 },
      1: { x: 0, y: 0 },
      2: { x: 0, y: 0 },
      3: { x: 0, y: 0 },
      4: { x: 0, y: 0 },
      5: { x: 0, y: 0 },
      6: { x: 0, y: 0 },
      7: { x: 0, y: 0 },
      8: { x: 0, y: 0 },
      9: { x: 0, y: 0 },
    };
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
      throw new Error(`Did not recognise ${direction}`);
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
    for (let instruction of this.instructions) {
      for (let i = 0; i < instruction.len; i++) {
        this.moveFirstRope(instruction.dir);
        for (let x = 0; x < 8; x++) {
          this.checkPartRope(x, x + 1);
        }
        this.checkTail();
      }
    }
    return [...new Set(this.tail_history)].length;
  }

  checkTail() {
    if (
      Math.abs(this.ropes[8].x - this.ropes[9].x) >= 2 &&
      Math.abs(this.ropes[8].y - this.ropes[9].y) >= 2
    ) {
      if (this.ropes[8].x - this.ropes[9].x > 0) {
        this.ropes[9].x++;
      } else {
        this.ropes[9].x--;
      }
      if (this.ropes[8].y - this.ropes[9].y > 0) {
        this.ropes[9].y++;
      } else {
        this.ropes[9].y--;
      }
      this.tail_history.push(`${this.ropes[9].x},${this.ropes[9].y}`);
    } else if (Math.abs(this.ropes[8].x - this.ropes[9].x) >= 2) {
      if (this.ropes[8].x - this.ropes[9].x > 0) {
        this.ropes[9].x++;
      } else {
        this.ropes[9].x--;
      }
      this.ropes[9].y = this.ropes[8].y;
      this.tail_history.push(`${this.ropes[9].x},${this.ropes[9].y}`);
    } else if (Math.abs(this.ropes[8].y - this.ropes[9].y) >= 2) {
      if (this.ropes[8].y - this.ropes[9].y > 0) {
        this.ropes[9].y++;
      } else {
        this.ropes[9].y--;
      }
      this.ropes[9].x = this.ropes[8].x;
      this.tail_history.push(`${this.ropes[9].x},${this.ropes[9].y}`);
    }
  }

  checkPartRope(head, tail) {
    if (
      Math.abs(this.ropes[head].x - this.ropes[tail].x) >= 2 &&
      Math.abs(this.ropes[head].y - this.ropes[tail].y) >= 2
    ) {
      if (this.ropes[head].x - this.ropes[tail].x > 0) {
        this.ropes[tail].x++;
      } else {
        this.ropes[tail].x--;
      }
      if (this.ropes[head].y - this.ropes[tail].y > 0) {
        this.ropes[tail].y++;
      } else {
        this.ropes[tail].y--;
      }
    } else if (Math.abs(this.ropes[head].x - this.ropes[tail].x) >= 2) {
      if (this.ropes[head].x - this.ropes[tail].x > 0) {
        this.ropes[tail].x++;
      } else {
        this.ropes[tail].x--;
      }
      this.ropes[tail].y = this.ropes[head].y;
    } else if (Math.abs(this.ropes[head].y - this.ropes[tail].y) >= 2) {
      if (this.ropes[head].y - this.ropes[tail].y > 0) {
        this.ropes[tail].y++;
      } else {
        this.ropes[tail].y--;
      }
      this.ropes[tail].x = this.ropes[head].x;
    }
  }

  moveFirstRope(direction) {
    if (direction === "R") {
      this.ropes[0].x++;
    } else if (direction === "L") {
      this.ropes[0].x--;
    } else if (direction === "U") {
      this.ropes[0].y++;
    } else if (direction === "D") {
      this.ropes[0].y--;
    } else {
      throw new Error(`Did not recognise ${direction}`);
    }
    this.checkMoveTail();
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

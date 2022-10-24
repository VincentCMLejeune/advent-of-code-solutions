class AdventOfCode {
  constructor(raw_data) {
    this.nums = this.parseInfos(raw_data);
    this.input = 5;
    this.idx = 0;
  }

  part_two() {
    while (true) {
      // console.log(this.nums);
      let instructionValue = this.nums[this.idx];
      const { op, modes } = this.getParameters(this.nums[this.idx]);
      // console.log(op, modes);
      if (op === 1) {
        this.add(modes);
        if (this.nums[this.idx] === instructionValue) {
          this.idx += 4;
        }
      } else if (op === 2) {
        this.multiply(modes);
        if (this.nums[this.idx] === instructionValue) {
          this.idx += 4;
        }
      } else if (op === 3) {
        this.storeInput(modes);
        if (this.nums[this.idx] === instructionValue) {
          this.idx += 2;
        }
      } else if (op === 4) {
        this.updateInput(modes);
        this.idx += 2;
      } else if (op === 5) {
        this.jumpIfTrue(modes);
      } else if (op === 6) {
        this.jumpIfFalse(modes);
      } else if (op === 7) {
        this.lessThan(modes);
        if (this.nums[this.idx] === instructionValue) {
          this.idx += 4;
        }
      } else if (op === 8) {
        this.isEqual(modes);
        if (this.nums[this.idx] === instructionValue) {
          this.idx += 4;
        }
      } else if (op === 99) {
        return this.input;
      } else {
        throw new Error(`Unknown op ${op}`);
      }
    }
  }

  add(modes) {
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[this.idx + 1]]
        : this.nums[this.idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[this.idx + 2]]
        : this.nums[this.idx + 2];
    const c = this.nums[this.idx + 3];
    // console.log(`Adding ${a} and ${b} and storing at ${c}`);
    this.nums[c] = a + b;
  }

  multiply(modes) {
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[this.idx + 1]]
        : this.nums[this.idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[this.idx + 2]]
        : this.nums[this.idx + 2];
    const c = this.nums[this.idx + 3];
    // console.log(`Multiplying ${a} and ${b} and storing at ${c}`);
    this.nums[c] = a * b;
  }

  storeInput(modes) {
    const a = this.nums[this.idx + 1];
    // console.log(`Storing input ${this.input} at ${a}`);
    this.nums[a] = this.input;
  }

  updateInput(modes) {
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[this.idx + 1]]
        : this.nums[this.idx + 1];
    // console.log(`Outputting ${a}`);
    this.input = a;
  }

  jumpIfTrue(modes) {
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[this.idx + 1]]
        : this.nums[this.idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[this.idx + 2]]
        : this.nums[this.idx + 2];
    // console.log(`Jumping to ${b} if ${a} is not zero`);
    if (a !== 0) {
      this.idx = b;
    } else {
      this.idx += 3;
    }
  }

  jumpIfFalse(modes) {
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[this.idx + 1]]
        : this.nums[this.idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[this.idx + 2]]
        : this.nums[this.idx + 2];
    // console.log(`Jumping to ${b} if ${a} is not zero`);
    if (a === 0) {
      this.idx = b;
    } else {
      this.idx += 3;
    }
  }

  lessThan(modes) {
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[this.idx + 1]]
        : this.nums[this.idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[this.idx + 2]]
        : this.nums[this.idx + 2];
    const c = modes[2] === "position" ? this.nums[this.idx + 3] : this.idx + 3;
    // console.log(`Storing 1 at ${c} if ${a} is less than ${b} else 0`);
    if (a < b) {
      this.nums[c] = 1;
    } else {
      this.nums[c] = 0;
    }
  }

  isEqual(modes) {
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[this.idx + 1]]
        : this.nums[this.idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[this.idx + 2]]
        : this.nums[this.idx + 2];
    const c = modes[2] === "position" ? this.nums[this.idx + 3] : this.idx + 3;
    // console.log(`Storing 1 at ${c} if ${a} equals ${b} else 0`);
    if (a === b) {
      this.nums[c] = 1;
    } else {
      this.nums[c] = 0;
    }
  }

  getParameters(num) {
    const str = String(num);
    const op = Number(str.slice(-2));
    let modesNum = str.slice(0, -2).split("").reverse();
    while (modesNum.length < 3) {
      modesNum.push("0");
    }
    const modes = modesNum.map((mode) =>
      mode === "0" ? "position" : "immediate"
    );
    return { op, modes };
  }

  parseInfos(raw_data) {
    return raw_data.split(",").map(Number);
  }
}

module.exports = AdventOfCode;

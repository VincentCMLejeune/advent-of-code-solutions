class AdventOfCode {
  constructor(raw_data) {
    this.nums = this.parseInfos(raw_data);
    this.input = 1;
  }

  part_one() {
    let idx = 0;
    while (true) {
      const { op, modes } = this.getParameters(this.nums[idx]);
      console.log(op, modes);
      if (op === 1) {
        this.add(idx, modes);
        idx += 4;
      } else if (op === 2) {
        this.multiply(idx, modes);
        idx += 4;
      } else if (op === 3) {
        this.storeInput(idx, modes);
        idx += 2;
      } else if (op === 4) {
        this.updateInput(idx, modes);
        idx += 2;
      } else if (op === 99) {
        return this.nums[idx + 1];
      } else {
        throw new Error(`Unknown op ${op}`);
      }
    }
  }

  add(idx, modes) {
    console.log([
      this.nums[idx],
      this.nums[idx + 1],
      this.nums[idx + 2],
      this.nums[idx + 3],
    ]);
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[idx + 1]]
        : this.nums[idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[idx + 2]]
        : this.nums[idx + 2];
    const c = this.nums[idx + 3];
    console.log(`Adding ${a} and ${b} and storing at ${c}`);
    this.nums[c] = a + b;
    console.log(this.nums[c]);
  }

  multiply(idx, modes) {
    console.log([
      this.nums[idx],
      this.nums[idx + 1],
      this.nums[idx + 2],
      this.nums[idx + 3],
    ]);
    const a =
      modes[0] === "position"
        ? this.nums[this.nums[idx + 1]]
        : this.nums[idx + 1];
    const b =
      modes[1] === "position"
        ? this.nums[this.nums[idx + 2]]
        : this.nums[idx + 2];
    const c = this.nums[idx + 3];
    console.log(`Multiplying ${a} and ${b} and storing at ${c}`);
    this.nums[c] = a * b;
  }

  storeInput(idx, modes) {
    console.log([this.nums[idx], this.nums[idx + 1]]);
    const a = this.nums[idx + 1];
    console.log(`Storing input ${this.input} at ${a}`);
    this.nums[a] = this.input;
  }

  updateInput(idx, modes) {
    console.log([this.nums[idx], this.nums[idx + 1]]);
    const a = this.nums[idx + 1];
    console.log(`Outputting ${a}`);
    this.input = a;
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

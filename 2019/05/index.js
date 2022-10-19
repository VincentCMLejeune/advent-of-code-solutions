class AdventOfCode {
  constructor(raw_data) {
    this.nums = this.parseInfos(raw_data);
  }

  part_one() {
    const computer = [...this.nums];
    // console.log(computer.length)
    // console.log(computer[225]);
    let input = 1;
    let idx = 0;
    while (computer[idx] !== 99) {
      const { op, modes } = this.getParameters(computer[idx]);
      if (op === 1) {
        console.log([
          computer[idx],
          computer[idx + 1],
          computer[idx + 2],
          computer[idx + 3],
        ]);
        const a =
          modes[0] === "0" ? computer[computer[idx + 1]] : computer[idx + 1];
        const b =
          modes[1] === "0" ? computer[computer[idx + 2]] : computer[idx + 2];
        const c = computer[idx + 3];
        console.log(`Adding ${a} and ${b} and storing at ${c}`);
        computer[c] = a + b;
        console.log(computer[c]);
        idx += 4;
      } else if (op === 2) {
        console.log([
          computer[idx],
          computer[idx + 1],
          computer[idx + 2],
          computer[idx + 3],
        ]);
        const a =
          modes[0] === "0" ? computer[computer[idx + 1]] : computer[idx + 1];
        const b =
          modes[1] === "0" ? computer[computer[idx + 2]] : computer[idx + 2];
        const c = computer[idx + 3];
        console.log(`Multiplying ${a} and ${b} and storing at ${c}`);
        computer[c] = a * b;
        idx += 4;
      } else if (op === 3) {
        console.log([computer[idx], computer[idx + 1]]);
        const a = computer[idx + 1];
        console.log(`Storing input ${input} at ${a}`);
        computer[a] = input;
        idx += 2;
      } else if (op === 4) {
        console.log([computer[idx], computer[idx + 1]]);
        const a = computer[idx + 1];
        console.log(`Outputting ${a}`);
        input = a;
        idx += 2;
      } else {
        throw new Error(`Unknown op ${op}`);
      }
    }
    return computer[idx + 1];
  }

  getParameters(num) {
    const str = String(num);
    const op = Number(str.slice(-2));
    let modes = str.slice(0, -2).split("").reverse();
    while (modes.length < 3) {
      modes.push("0");
    }
    return { op, modes };
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.split(",").map(Number);
  }
}

module.exports = AdventOfCode;

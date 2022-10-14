class AdventOfCode {
  constructor(raw_data) {
    this.nums = this.parseInfos(raw_data);
  }

  part_one() {
    const computer = [...this.nums];
    let valueToAdd = 0;
    for (let i = 0; i < computer.length; i += 4) {
      if (computer[i] === 99) {
        return computer[0];
      } else if (computer[i] === 1) {
        valueToAdd = computer[computer[i + 1]] + computer[computer[i + 2]];
      } else if (computer[i] === 2) {
        valueToAdd = computer[computer[i + 1]] * computer[computer[i + 2]];
      } else {
        throw new Error("No 1, 2 or 99 found");
      }
      computer[computer[i + 3]] = valueToAdd;
    }
    throw new Error("Ended the list without finding 99");
  }

  changeNumbers() {
    this.nums[1] = 12;
    this.nums[2] = 2;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.split(",").map(Number);
  }
}

module.exports = AdventOfCode;

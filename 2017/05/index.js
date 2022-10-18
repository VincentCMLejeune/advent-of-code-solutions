class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
  }

  part_one() {
    const arr = [...this.instructions];
    const uplimit = this.instructions.length;
    const downlimit = -1;
    let idx = 0;
    let steps = 0;
    while (idx > downlimit && idx < uplimit) {
      steps++;
      let nextIdx = idx + arr[idx];
      arr[idx]++;
      idx = nextIdx;
    }
    return steps;
  }

  part_two() {
    const arr = [...this.instructions];
    const uplimit = this.instructions.length;
    const downlimit = -1;
    let idx = 0;
    let steps = 0;
    while (idx > downlimit && idx < uplimit) {
      steps++;
      let offset = arr[idx];
      let nextIdx = idx + offset;
      arr[idx] += offset >= 3 ? -1 : +1;
      idx = nextIdx;
    }
    return steps;
  }

  parseInfos(raw_data) {
    return raw_data.map(Number);
  }
}

module.exports = AdventOfCode;

class AdventOfCode {
  constructor(raw_data) {
    this.containers = this.parseInfos(raw_data);
    this.combinations = [];
  }

  part_one(target) {
    let count = 0;
    this.iterate();
    for (let combination of this.combinations) {
      let sum = 0;
      for (let i = 0; i < combination.length; i++) {
        if (combination[i] === true) {
          sum += this.containers[i];
        }
      }
      if (sum === target) count++;
    }
    return count;
  }

  iterate(current = [], idx = 0) {
    if (idx === this.containers.length - 1) {
      this.combinations.push([...current, true]);
      this.combinations.push([...current, false]);
    } else {
      idx++;
      this.iterate([...current, true], idx);
      this.iterate([...current, false], idx);
    }
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map(Number);
  }
}

module.exports = AdventOfCode;

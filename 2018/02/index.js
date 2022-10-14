class AdventOfCode {
  constructor(raw_data) {
    this.ids = this.parseInfos(raw_data);
  }

  part_one() {
    let doubleCount = 0;
    let tripleCount = 0;
    for (let id of this.ids) {
      id.sort();
      id.push("%");
      id.push("!");
      let hasDouble = false;
      let hasTriple = false;
      for (let i = 0; i < id.length - 3; i++) {
        if (id[i] === id[i + 1]) {
          if (id[i] === id[i + 2]) {
            if (id[i] !== id[i + 3]) {
              hasTriple = true;
            }
          } else {
            if (i === 0 || id[i - 1] !== id[i]) {
              hasDouble = true;
            }
          }
        }
      }
      if (hasDouble) {
        doubleCount++;
      }
      if (hasTriple) {
        tripleCount++;
      }
    }
    return doubleCount * tripleCount;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(""));
  }
}

module.exports = AdventOfCode;

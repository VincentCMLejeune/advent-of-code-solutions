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
    for (let i = 0; i < this.ids.length - 1; i++) {
      for (let j = i + 1; j < this.ids.length; j++) {
        if (this.onlyOneLetterDiff(this.ids[i], this.ids[j])) {
          return this.getCommonLetters(this.ids[i], this.ids[j]);
        }
      }
    }
    throw new Error("No solution found");
  }

  onlyOneLetterDiff(strA, strB) {
    let diffCount = 0;
    for (let i = 0; i < strA.length; i++) {
      if (strA[i] !== strB[i]) {
        if (diffCount === 1) {
          return false;
        }
        diffCount++;
      }
    }
    return diffCount === 1;
  }

  getCommonLetters(strA, strB) {
    let commonLetters = "";
    for (let i = 0; i < strA.length; i++) {
      if (strA[i] === strB[i]) {
        commonLetters += strA[i];
      }
    }
    return commonLetters;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(""));
  }
}

module.exports = AdventOfCode;

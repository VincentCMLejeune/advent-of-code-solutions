class AdventOfCode {
  constructor(raw_data) {
    this.characters = this.parseInfos(raw_data);
  }

  part_one() {
    let arr = this.characters.split("");
    let idx = 0;

    while (idx < arr.length - 1) {
      if (this.areOpposite(arr[idx], arr[idx + 1])) {
        arr.splice(idx, 2);
        idx = idx > 0 ? idx - 1 : 0;
      } else {
        idx++;
      }
    }
    return arr.length;
  }

  areOpposite(charA, charB) {
    return (
      charA.toUpperCase() === charB.toUpperCase() &&
      ((charA === charA.toUpperCase() && charB === charB.toLowerCase()) ||
        (charA === charA.toLowerCase() && charB === charB.toUpperCase()))
    );
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

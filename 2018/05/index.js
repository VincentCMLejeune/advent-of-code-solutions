class AdventOfCode {
  constructor(raw_data) {
    this.characters = this.parseInfos(raw_data);
  }

  part_one() {
    return this.polymerize(this.characters);
  }

  polymerize(str) {
    let arr = str.split("");
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
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let fullArr = this.characters.split("");
    let min_length = Infinity;
    for (let char of alphabet) {
      let filteredArr = fullArr.filter((elem) => elem.toLowerCase() !== char);
      let filteredArrLength = this.polymerize(filteredArr.join(""));
      min_length = Math.min(min_length, filteredArrLength);
    }
    return min_length;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

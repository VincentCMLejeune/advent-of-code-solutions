class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let firstIllegalCharacters = [];
    for (let row of this.infos) {
      firstIllegalCharacters.push(this.filterParenthesis(row));
    }
    return this.countCorruptedScore(firstIllegalCharacters);
  }

  countCorruptedScore(arr) {
    const scores = {
      ")": 3,
      "]": 57,
      "}": 1197,
      ">": 25137,
    };
    let score = 0;
    arr = arr.filter((value) => value !== "not corrupted");
    for (let elem of arr) {
      score += scores[elem];
    }
    return score;
  }

  filterParenthesis(arr) {
    // console.log("\n");
    // console.log(arr);
    let lastCycleLength = arr.length;
    do {
      lastCycleLength = arr.length;
      for (let i = arr.length - 1; i >= 0; i--) {
        if (
          (arr[i] === ">" && arr[i - 1] === "<") ||
          (arr[i] === ")" && arr[i - 1] === "(") ||
          (arr[i] === "]" && arr[i - 1] === "[") ||
          (arr[i] === "}" && arr[i - 1] === "{")
        ) {
          arr.splice(i - 1, 2);
        }
      }
    } while (lastCycleLength !== arr.length);
    for (let elem of arr) {
      if (elem === ">" || elem === ")" || elem === "]" || elem === "}") {
        return elem;
      }
    }
    return "not corrupted";
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((str) => str.split(""));
  }
}

module.exports = AdventOfCode;

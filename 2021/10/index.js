class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_two() {
    let cleanArr = [];
    for (let row of this.infos) {
      let arr = this.filterCorruptedLines(row);
      if (arr !== null) {
        cleanArr.push(arr.join(""));
      }
    }
    let completedArr = this.autocomplete(cleanArr);
    let scores = this.calculateCompleted(completedArr);
    let sortedScores = scores.sort((x, y) => x - y);
    return sortedScores[(sortedScores.length - 1) / 2];
  }

  calculateCompleted(arr) {
    let scoreArr = [];
    const scores = {
      ")": 1,
      "]": 2,
      "}": 3,
      ">": 4,
    };
    for (let str of arr) {
      let score = 0;
      for (let char of str) {
        score = score * 5 + scores[char];
      }
      scoreArr.push(score);
    }
    return scoreArr;
  }

  autocomplete(arr) {
    let completedArr = [];
    const opposites = {
      "<": ">",
      "(": ")",
      "[": "]",
      "{": "}",
    };
    for (let str of arr) {
      let completedStr = "";
      for (let i = str.length - 1; i >= 0; i--) {
        completedStr += opposites[str[i]];
      }
      completedArr.push(completedStr);
    }
    return completedArr;
  }

  filterCorruptedLines(arr) {
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
    for (let i = 0; i < arr.length; i++) {
      if (
        arr.every(
          (elem) => elem !== "}" && elem !== ")" && elem !== "]" && elem !== ">"
        )
      ) {
        return arr;
      }
    }
    return null;
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

  parseInfos(raw_data) {
    return raw_data.map((str) => str.split(""));
  }
}

module.exports = AdventOfCode;

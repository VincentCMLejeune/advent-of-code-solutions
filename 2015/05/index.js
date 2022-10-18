class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let niceCount = 0;
    this.infos.forEach((str) => {
      if (this.hasThreeVowels(str)) {
        if (this.hasDoubleLetter(str)) {
          if (this.hasNoNaughtyStrings(str)) {
            niceCount++;
          }
        }
      }
    });
    return niceCount;
  }

  hasNoNaughtyStrings(str) {
    return (
      !str.includes("ab") &&
      !str.includes("cd") &&
      !str.includes("pq") &&
      !str.includes("xy")
    );
  }

  hasDoubleLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) {
        return true;
      }
    }
    return false;
  }

  hasThreeVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        if (++vowelCount === 3) {
          return true;
        }
      }
    }
    return false;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

class AdventOfCode {
  constructor(raw_data) {
    this.words = this.parseInfos(raw_data);
  }

  part_one() {
    let wordRange = this.words[0].length;
    let charMap = {};
    for (let i = 0; i < wordRange; i++) {
      charMap[i] = {};
    }
    for (let word of this.words) {
      for (let i = 0; i < word.length; i++) {
        charMap[i][word[i]] = charMap[i][word[i]] + 1 || 1;
      }
    }
    let word = "";
    for (let i = 0; i < wordRange; i++) {
      const sortedKeys = Object.keys(charMap[i]).sort(
        (a, b) => charMap[i][b] - charMap[i][a]
      );
      word += sortedKeys[0];
    }
    return word;
  }

  part_two() {
    let wordRange = this.words[0].length;
    let charMap = {};
    for (let i = 0; i < wordRange; i++) {
      charMap[i] = {};
    }
    for (let word of this.words) {
      for (let i = 0; i < word.length; i++) {
        charMap[i][word[i]] = charMap[i][word[i]] + 1 || 1;
      }
    }
    let word = "";
    for (let i = 0; i < wordRange; i++) {
      const sortedKeys = Object.keys(charMap[i]).sort(
        (a, b) => charMap[i][a] - charMap[i][b]
      );
      word += sortedKeys[0];
    }
    return word;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split(""));
  }
}

module.exports = AdventOfCode;

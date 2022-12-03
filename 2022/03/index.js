class AdventOfCode {
  constructor(raw_data) {
    this.sacks = this.parseInfos(raw_data);
  }

  part_one() {
    let score = 0;
    for (let sack of this.sacks) {
      score += this.rearrange(sack);
    }
    return score;
  }

  rearrange(sack) {
    const half_length = sack.length / 2;
    let first_half = sack.slice(0, half_length);
    let second_half = sack.slice(half_length);
    for (let char of first_half) {
      if (second_half.includes(char)) {
        return this.getScoreFromLetter(char);
      }
    }
  }

  getScoreFromLetter(letter) {
    const alphabet = "*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.indexOf(letter);
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

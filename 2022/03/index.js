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
    let groups = this.makeGroupsOfThree(this.sacks);
    let score = 0;
    for (let group of groups) {
      score += this.findBadge(group);
    }
    return score;
  }

  findBadge(group) {
    for (let char of group[0]) {
      if (group[1].includes(char) && group[2].includes(char)) {
        return this.getScoreFromLetter(char);
      }
    }
  }

  makeGroupsOfThree(sacks) {
    let groups = [];
    let curGroup = [];
    while (sacks.length !== 0) {
      curGroup.push(sacks.shift());
      if (curGroup.length === 3) {
        groups.push(curGroup);
        curGroup = [];
      }
    }
    return groups;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

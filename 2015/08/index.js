class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let unprocessedStrings = [...this.infos];
    let processedStrings = eval(`[${this.infos.join(",")}]`);
    let len = 0;
    for (let i = 0; i < this.infos.length; i++) {
      len += unprocessedStrings[i].length;
      len -= processedStrings[i].length;
    }
    return len;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

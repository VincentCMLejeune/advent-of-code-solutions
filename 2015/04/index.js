const MD5 = require("./md5.js");

class AdventOfCode {
  constructor(raw_data) {
    this.str = this.parseInfos(raw_data);
  }

  part_one() {
    for (let i = 0; i < 10000000; i++) {
      let curStr = this.str + i;
      let hash = MD5(curStr).substring(0, 5);
      if (hash === "00000") {
        return i;
      }
    }
    throw new Error("Found no solution after 10 million iterations");
  }

  part_two() {
    for (let i = 0; i < 10000000; i++) {
      let curStr = this.str + i;
      let hash = MD5(curStr).substring(0, 6);
      if (hash === "000000") {
        return i;
      }
    }
    throw new Error("Found no solution after 10 million iterations");
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

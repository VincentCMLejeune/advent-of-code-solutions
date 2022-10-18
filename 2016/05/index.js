const MD5 = require("./md5.js");

class AdventOfCode {
  constructor(raw_data) {
    this.id = this.parseInfos(raw_data);
  }

  part_one() {
    let pass = "";
    for (let i = 0; i < 100000000; i++) {
      let curStr = this.id + i;
      let hash = MD5(curStr).substring(0, 6);
      if (hash.substring(0, 5) === "00000") {
        pass += hash[5];
        if (pass.length === 8) {
          return pass;
        }
      }
    }
    throw new Error("Iterated up to 100 million");
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

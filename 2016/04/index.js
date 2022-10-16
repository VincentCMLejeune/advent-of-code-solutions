class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let sumCheckSum = 0;
    for (let line of this.infos) {
      sumCheckSum += this.isRealRoom(line);
    }
    return sumCheckSum;
  }

  isRealRoom(info) {
    const { name, id, checksum } = info;
    const letterCount = {};
    for (let letter of name) {
      letterCount[letter] = letterCount[letter] + 1 || 1;
    }
    const sorted = Object.keys(letterCount).sort((a, b) => {
      if (letterCount[a] === letterCount[b]) {
        return a > b ? 1 : -1;
      }
      return letterCount[b] - letterCount[a];
    });
    const topFive = sorted.slice(0, 5);
    return topFive.join("") === checksum ? Number(id) : 0;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsedData = [];
    for (let line of raw_data) {
      line = line.split("-");
      const last = line.pop();
      const sectorId = last.match(/\d+/)[0];
      const checksum = last.match(/\[(\w+)\]/)[1];
      parsedData.push({
        name: line.join(""),
        id: sectorId,
        checksum: checksum,
      });
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

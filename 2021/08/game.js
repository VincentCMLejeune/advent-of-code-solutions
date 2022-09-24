class Game {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    // console.log(this.infos);
  }

  part_one() {
    let count = 0;
    for (let row of this.infos) {
      let res = this.decode(row.numbers, row.code);
      let trackedNumbers = [1, 4, 7, 8];
      for (let number of trackedNumbers) {
        count += res.code.filter(
          (elem) => elem === res.decodedNumbers[number]
        ).length;
      }
    }
    return count;
  }

  decode(rawNumbers, code) {
    const decodedNumbers = {};
    // 1 : two segments
    for (let i = 0; i < rawNumbers.length; i++) {
      if (rawNumbers[i].length === 2) {
        decodedNumbers[1] = rawNumbers[i];
        rawNumbers.splice(i, 1);
      }
    }
    // 4 : four segments
    for (let i = 0; i < rawNumbers.length; i++) {
      if (rawNumbers[i].length === 4) {
        decodedNumbers[4] = rawNumbers[i];
        rawNumbers.splice(i, 1);
      }
    }
    // 7 : three segments
    for (let i = 0; i < rawNumbers.length; i++) {
      if (rawNumbers[i].length === 3) {
        decodedNumbers[7] = rawNumbers[i];
        rawNumbers.splice(i, 1);
      }
    }
    // 8 : seven segments
    for (let i = 0; i < rawNumbers.length; i++) {
      if (rawNumbers[i].length === 7) {
        decodedNumbers[8] = rawNumbers[i];
        rawNumbers.splice(i, 1);
      }
    }
    return {
      decodedNumbers: decodedNumbers,
      code: code,
    };
  }

  parseInfos(raw_data) {
    let processed_data = [];
    for (let i = 0; i < raw_data.length; i++) {
      let newRow = raw_data[i].split(" | ");
      processed_data.push({
        numbers: newRow[0]
          .split(" ")
          .map((letters) => letters.split("").sort().join("")),
        code: newRow[1]
          .split(" ")
          .map((letters) => letters.split("").sort().join("")),
      });
    }
    return processed_data;
  }
}

module.exports = Game;

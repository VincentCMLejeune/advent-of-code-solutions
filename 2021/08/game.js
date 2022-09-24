class Game {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
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

  part_two() {
    let total = 0;
    for (let row of this.infos) {
      let decodedNumbers = this.decode(row.numbers);
      total += this.calculateCode(decodedNumbers, row.code);
    }
    return total;
  }

  calculateCode(map, code) {
    let reverseMap = {};
    for (const [key, value] of Object.entries(map)) {
      reverseMap[value] = key;
    }
    let num = "";
    for (let digit of code) {
      num += reverseMap[digit];
    }
    return Number(num);
  }

  decode(rawNumbers) {
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
    // 3 : five segments, same as one
    for (let i = 0; i < rawNumbers.length; i++) {
      if (rawNumbers[i].length === 5) {
        if (
          decodedNumbers[1]
            .split("")
            .every((segment) => rawNumbers[i].indexOf(segment) !== -1)
        ) {
          decodedNumbers[3] = rawNumbers[i];
          rawNumbers.splice(i, 1);
        }
      }
    }
    // 5 : five segments, three in common with four
    for (let i = 0; i < rawNumbers.length; i++) {
      if (rawNumbers[i].length === 5) {
        if (
          decodedNumbers[4]
            .split("")
            .filter((segment) => rawNumbers[i].indexOf(segment) !== -1)
            .length === 3
        ) {
          decodedNumbers[5] = rawNumbers[i];
          rawNumbers.splice(i, 1);
        }
      }
    }
    // 2 : last coded number with five segments
    for (let i = 0; i < rawNumbers.length; i++) {
      if (rawNumbers[i].length === 5) {
        decodedNumbers[2] = rawNumbers[i];
        rawNumbers.splice(i, 1);
      }
    }
    // 9 : all segments common with four
    // (no need to check length, by this point only remains six-segments long numbers)
    for (let i = 0; i < rawNumbers.length; i++) {
      if (
        decodedNumbers[4]
          .split("")
          .every((segment) => rawNumbers[i].indexOf(segment) !== -1)
      ) {
        decodedNumbers[9] = rawNumbers[i];
        rawNumbers.splice(i, 1);
      }
    }
    // 0 : all segments common with one
    for (let i = 0; i < rawNumbers.length; i++) {
      if (
        decodedNumbers[1]
          .split("")
          .every((segment) => rawNumbers[i].indexOf(segment) !== -1)
      ) {
        decodedNumbers[0] = rawNumbers[i];
        rawNumbers.splice(i, 1);
      }
    }
    // 6 : remaining number
    decodedNumbers[6] = rawNumbers[0];
    return decodedNumbers;
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

class AdventOfCode {
  constructor(raw_data) {
    this.cards = this.parseInfos(raw_data);
  }

  part_one() {
    let res = 0;
    for (let card of this.cards) {
      let matches = 0;
      for (let pickedNumber of card.pickedNumbers) {
        if (card.winningNumbers.includes(pickedNumber)) {
          matches++;
        }
      }
      if (matches !== 0) {
        res += Math.pow(2, matches - 1);
      }
    }
    return res;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    let parsedData = [];
    for (let i = 0; i < raw_data.length; i++) {
      let card = {
        id: i + 1,
        winningNumbers: [],
        pickedNumbers: [],
      };
      let row = raw_data[i].split(" | ");
      card.winningNumbers = row[0]
        .split(": ")[1]
        .split(" ")
        .filter((elem) => elem.length > 0)
        .map((num) => Number(num));
      card.pickedNumbers = row[1]
        .split(" ")
        .filter((elem) => elem.length > 0)
        .map((num) => Number(num));
      parsedData.push(card);
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

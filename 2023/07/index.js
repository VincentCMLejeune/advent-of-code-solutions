class AdventOfCode {
  constructor(raw_data) {
    this.hands = this.parseInfos(raw_data);
    this.strength = [
      "A",
      "K",
      "Q",
      "J",
      "T",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
    ];
    this.strengthJ = [
      "A",
      "K",
      "Q",
      "T",
      "9",
      "8",
      "7",
      "6",
      "5",
      "4",
      "3",
      "2",
      "J",
    ];
    this.sortInsideType = this.sortInsideType.bind(this);
    this.sortInsideTypeJ = this.sortInsideTypeJ.bind(this);
  }

  part_one() {
    let handsSortedByType = this.sortByType(this.hands);
    let sortedHands = [];
    for (let type of Object.keys(handsSortedByType)) {
      let sorted = handsSortedByType[type].sort(this.sortInsideType);
      for (let hand of sorted) {
        sortedHands.push(hand);
      }
    }
    let res = 0;
    for (let i = 0; i < sortedHands.length; i++) {
      res += (i + 1) * sortedHands[i].score;
    }
    return res;
  }

  sortInsideType(a, b) {
    let a_cards = a.cards;
    let b_cards = b.cards;
    for (let i = 0; i < a_cards.length; i++) {
      if (
        this.strength.indexOf(a_cards[i]) < this.strength.indexOf(b_cards[i])
      ) {
        return 1;
      } else if (
        this.strength.indexOf(a_cards[i]) > this.strength.indexOf(b_cards[i])
      ) {
        return -1;
      }
    }
    return 0;
  }

  sortByType(hands) {
    let sortedHands = {
      high: [],
      one: [],
      two: [],
      three: [],
      house: [],
      four: [],
      five: [],
    };
    for (let hand of hands) {
      let cards = hand.cards;
      if (this.isFive(cards)) {
        sortedHands.five.push(hand);
      } else if (this.isFour(cards)) {
        sortedHands.four.push(hand);
      } else if (this.isHouse(cards)) {
        sortedHands.house.push(hand);
      } else if (this.isThree(cards)) {
        sortedHands.three.push(hand);
      } else if (this.isTwo(cards)) {
        sortedHands.two.push(hand);
      } else if (this.isOne(cards)) {
        sortedHands.one.push(hand);
      } else {
        sortedHands.high.push(hand);
      }
    }
    return sortedHands;
  }

  isFive(cards) {
    return this.count(cards, cards[0]) === 5;
  }
  isFour(cards) {
    return cards.some((card) => this.count(cards, card) === 4);
  }
  isHouse(cards) {
    let hasThree = false;
    let hasPair = false;
    for (let i = 0; i < cards.length; i++) {
      if (this.count(cards, cards[i]) === 3) {
        hasThree = true;
      } else if (this.count(cards, cards[i]) === 2) {
        hasPair = true;
      }
    }
    return hasPair && hasThree;
  }
  isThree(cards) {
    return cards.some((card) => this.count(cards, card) === 3);
  }
  isTwo(cards) {
    let pairs = [];
    for (let card of cards) {
      if (this.count(cards, card) === 2 && !pairs.includes(card)) {
        pairs.push(card);
      }
    }
    return pairs.length === 2;
  }
  isOne(cards) {
    return cards.some((card) => this.count(cards, card) === 2);
  }

  count(arr, elem) {
    return arr.filter((x) => x === elem).length;
  }

  part_two() {
    let handsSortedByType = this.sortByTypeJ(this.hands);
    let sortedHands = [];
    for (let type of Object.keys(handsSortedByType)) {
      let sorted = handsSortedByType[type].sort(this.sortInsideTypeJ);
      for (let hand of sorted) {
        sortedHands.push(hand);
      }
    }
    let res = 0;
    for (let i = 0; i < sortedHands.length; i++) {
      res += (i + 1) * sortedHands[i].score;
    }
    return res;
  }

  sortByTypeJ(hands) {
    let sortedHands = {
      high: [],
      one: [],
      two: [],
      three: [],
      house: [],
      four: [],
      five: [],
    };
    for (let hand of hands) {
      let cards = hand.cards.filter((card) => card !== "J");
      if (this.isFiveJ(cards)) {
        sortedHands.five.push(hand);
      } else if (this.isFourJ(cards)) {
        sortedHands.four.push(hand);
      } else if (this.isHouseJ(cards)) {
        sortedHands.house.push(hand);
      } else if (this.isThreeJ(cards)) {
        sortedHands.three.push(hand);
      } else if (this.isTwoJ(cards)) {
        // console.log(hand.cards.join(""));
        sortedHands.two.push(hand);
      } else if (this.isOneJ(cards)) {
        sortedHands.one.push(hand);
      } else {
        sortedHands.high.push(hand);
      }
    }
    return sortedHands;
  }

  isFiveJ(cards) {
    if (cards.length === 0) return true;
    return cards.every((card) => card === cards[0]);
  }
  isFourJ(cards) {
    if (cards.length === 2) {
      return true;
    } else if (cards.length === 3) {
      if (this.isOne(cards)) return true;
    } else if (cards.length === 4) {
      if (this.isThree(cards)) return true;
    } else {
      return this.isFour(cards);
    }
  }
  isHouseJ(cards) {
    if (cards.length === 4) {
      if (this.isTwo(cards)) return true;
    } else {
      return this.isHouse(cards);
    }
  }
  isThreeJ(cards) {
    if (cards.length === 3) {
      return true;
    } else if (cards.length === 4) {
      if (this.isOne(cards)) return true;
    } else {
      return this.isThree(cards);
    }
  }
  isTwoJ(cards) {
    if (cards.length === 4) {
      if (this.isOne(cards)) return true;
    } else {
      return this.isTwo(cards);
    }
  }
  isOneJ(cards) {
    if (cards.length === 4) {
      return true;
    } else {
      return this.isOne(cards);
    }
  }

  sortInsideTypeJ(a, b) {
    let newStrength = this.strengthJ.filter((elem) => elem !== "J");
    newStrength.unshift("J");
    let a_cards = a.cards;
    let b_cards = b.cards;
    for (let i = 0; i < a_cards.length; i++) {
      if (
        this.strengthJ.indexOf(a_cards[i]) < this.strengthJ.indexOf(b_cards[i])
      ) {
        return 1;
      } else if (
        this.strengthJ.indexOf(a_cards[i]) > this.strengthJ.indexOf(b_cards[i])
      ) {
        return -1;
      }
    }
    return 0;
  }

  parseInfos(raw_data) {
    let parsedData = [];
    for (let row of raw_data) {
      row = row.split(" ");
      parsedData.push({
        cards: row[0].split(""),
        score: Number(row[1]),
      });
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

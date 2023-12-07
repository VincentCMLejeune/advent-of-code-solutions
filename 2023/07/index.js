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
    this.sortInsideType = this.sortInsideType.bind(this);
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
    for (let i = 0; i < 2; i++) {
      if (this.count(cards, cards[i]) === 4) return true;
    }
    return false;
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
    return true;
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

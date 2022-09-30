class AdventOfCode {
  constructor(raw_data) {
    const infos = this.parseInfos(raw_data);
    this.input = infos.input;
    this.polyMap = infos.parsedMap;
  }

  part_one() {
    let inputMap = this.mapInput(this.input);
    let polyMap = this.mapTheMap(this.polyMap);
    for (let i = 0; i < 10; i++) {
      inputMap = this.polymerize(inputMap, polyMap);
    }
    const lettersMap = this.countLettersInMap(inputMap);
    let max = -Infinity;
    let min = Infinity;
    for (let num of Object.values(lettersMap)) {
      if (num > max) {
        max = num;
      }
      if (num < min) {
        min = num;
      }
    }
    return Math.round(max / 2) - Math.round(min / 2);
  }

  countLettersInMap(inputMap) {
    const countMap = {};
    for (let [str, num] of Object.entries(inputMap)) {
      countMap[str[0]] ? (countMap[str[0]] += num) : (countMap[str[0]] = num);
      countMap[str[1]] ? (countMap[str[1]] += num) : (countMap[str[1]] = num);
    }
    return countMap;
  }

  mapInput(str) {
    const inputMap = {};
    for (let i = 0; i < str.length - 1; i++) {
      let curStr = str.substr(i, 2);
      inputMap[curStr] ? inputMap[curStr]++ : (inputMap[curStr] = 1);
    }
    return inputMap;
  }

  mapTheMap(inputMap) {
    const mappedmap = {};
    for (let [key, value] of Object.entries(inputMap)) {
      mappedmap[key] = [key[0] + value, value + key[1]];
    }
    return mappedmap;
  }

  polymerize(inputMap, polyMap) {
    const newMap = {};
    for (let [str, quantity] of Object.entries(inputMap)) {
      let arrToAdd = polyMap[str];
      for (let elem of arrToAdd) {
        newMap[elem] ? (newMap[elem] += quantity) : (newMap[elem] = quantity);
      }
    }
    return newMap;
  }

  part_two() {
    let inputMap = this.mapInput(this.input);
    let polyMap = this.mapTheMap(this.polyMap);
    for (let i = 0; i < 40; i++) {
      inputMap = this.polymerize(inputMap, polyMap);
    }
    const lettersMap = this.countLettersInMap(inputMap);
    let max = -Infinity;
    let min = Infinity;
    for (let num of Object.values(lettersMap)) {
      if (num > max) {
        max = num;
      }
      if (num < min) {
        min = num;
      }
    }
    return Math.round(max / 2) - Math.round(min / 2);
  }

  parseInfos(raw_data) {
    const parsedData = {
      input: raw_data[0],
      parsedMap: {},
    };

    for (let i = 2; i < raw_data.length; i++) {
      let row = raw_data[i].split(" -> ");
      parsedData.parsedMap[row[0]] = row[1];
    }

    return parsedData;
  }
}

module.exports = AdventOfCode;

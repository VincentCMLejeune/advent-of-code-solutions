class Fish {
  constructor(raw_data) {
    this.initialFish = this.parseInfos(raw_data);
  }

  partOne() {
    let fishMap = this.countFish(this.initialFish);
    let finalFishMap = this.populateFish(fishMap, 80);
    return this.sumFish(finalFishMap);
  }

  partTwo() {
    let fishMap = this.countFish(this.initialFish);
    let finalFishMap = this.populateFish(fishMap, 256);
    return this.sumFish(finalFishMap);
  }

  populateFish(fishMap, days) {
    for (let i = 1; i <= days; i++) {
      let tempZero = fishMap[0];
      for (let j = 0; j < 8; j++) {
        fishMap[j] = fishMap[j + 1];
      }
      fishMap[6] += tempZero;
      fishMap[8] = tempZero;
    }
    return fishMap;
  }

  sumFish(fishMap) {
    let count = 0;
    for (let i = 0; i <= 8; i++) {
      count += fishMap[i];
    }
    return count;
  }

  countFish(arr) {
    let fishMap = {};
    for (let i = 0; i < 9; i++) {
      fishMap[i] = 0;
    }
    for (let num of arr) {
      fishMap[num]++;
    }
    return fishMap;
  }

  parseInfos(raw_data) {
    return raw_data[0].split(",").map(Number);
  }
}

module.exports = Fish;

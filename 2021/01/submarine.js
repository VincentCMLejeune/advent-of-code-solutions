class Submarine {
  constructor(raw_data) {
    this.depthsList = this.parseInfos(raw_data);
  }

  checkHowManyIncreasedDepths() {
    let count = 0;
    for (let i = 1; i < this.depthsList.length; i++) {
      if (this.depthsList[i] > this.depthsList[i - 1]) {
        count++;
      }
    }
    return count;
  }

  checkIncreasedDeapthsByThree() {
    let count = 0;
    for (let i = 3; i < this.depthsList.length; i++) {
      let previousSum =
        this.depthsList[i - 3] +
        this.depthsList[i - 2] +
        this.depthsList[i - 1];
      let currentSum =
        this.depthsList[i - 2] + this.depthsList[i - 1] + this.depthsList[i];
      if (currentSum > previousSum) {
        count++;
      }
    }
    return count;
  }

  parseInfos(raw_data) {
    return raw_data.map((elem) => Number(elem));
  }
}

module.exports = Submarine;

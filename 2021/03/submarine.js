class Submarine {
  constructor(raw_data) {
    this.bitRate = raw_data;
  }

  getGammaEpsilonRate() {
    let res = {
      gamma: "",
      epsilon: "",
    };
    const bitRateLength = this.bitRate[0].length;
    for (let i = 0; i < bitRateLength; i++) {
      let count = {
        0: 0,
        1: 0,
      };
      for (let row of this.bitRate) {
        count[row[i]]++;
      }
      if (count[0] > count[1]) {
        res.gamma += "0";
        res.epsilon += "1";
      } else {
        res.gamma += "1";
        res.epsilon += "0";
      }
    }
    return res;
  }

  binaryToDecimal(number) {
    let numArr = number.split("").reverse();
    let num = 0;
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] === "1") {
        num += Math.pow(2, i);
      }
    }
    return num;
  }

  customMethod() {
    let rates = this.getGammaEpsilonRate();
    let epislonNum = this.binaryToDecimal(rates.epsilon);
    let gammaNum = this.binaryToDecimal(rates.gamma);
    return epislonNum * gammaNum;
  }
}

module.exports = Submarine;

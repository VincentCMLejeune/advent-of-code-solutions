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

  getOxygenRating() {
    let possibleRatings = [...this.bitRate];
    const bitRateLength = this.bitRate[0].length;
    for (let i = 0; i < bitRateLength; i++) {
      let valueToFilter;
      let count = {
        0: 0,
        1: 0,
      };
      for (let row of possibleRatings) {
        count[row[i]]++;
      }
      if (count[1] >= count[0]) {
        valueToFilter = "1";
      } else {
        valueToFilter = "0";
      }
      let updatedRatings = [];
      for (let rating of possibleRatings) {
        if (rating[i] === valueToFilter) {
          updatedRatings.push(rating);
        }
      }
      if (updatedRatings.length === 1) {
        return updatedRatings[0];
      }
      possibleRatings = updatedRatings;
    }
    throw new Error("Could not find the oxygen rating");
  }

  getDioxideRating() {
    let possibleRatings = [...this.bitRate];
    const bitRateLength = this.bitRate[0].length;
    for (let i = 0; i < bitRateLength; i++) {
      let valueToFilter;
      let count = {
        0: 0,
        1: 0,
      };
      for (let row of possibleRatings) {
        count[row[i]]++;
      }
      if (count[1] >= count[0]) {
        valueToFilter = "0";
      } else {
        valueToFilter = "1";
      }
      let updatedRatings = [];
      for (let rating of possibleRatings) {
        if (rating[i] === valueToFilter) {
          updatedRatings.push(rating);
        }
      }
      if (updatedRatings.length === 1) {
        return updatedRatings[0];
      }
      possibleRatings = updatedRatings;
    }
    throw new Error("Could not find the dioxide rating");
  }

  processOxygenAndDioxyde() {
    let oxygenRating = this.getOxygenRating();
    let dioxydeRating = this.getDioxideRating();
    let oxygenNum = this.binaryToDecimal(oxygenRating);
    let dioxydeNum = this.binaryToDecimal(dioxydeRating);
    return oxygenNum * dioxydeNum;
  }
}

module.exports = Submarine;

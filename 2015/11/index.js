class AdventOfCode {
  constructor(raw_data) {
    this.currentPass = this.parseInfos(raw_data);
  }

  part_one() {
    let pass = this.currentPass;
    console.log(pass);
    for (let i = 0; i < 1000000000; i++) {
      pass = this.increment(pass);
      if (this.isValid(pass)) return pass;
    }
    throw new Error("No solution found in 1 000 000 000 iterations");
    // console.log(this.hasThreeIncreasing("abcdffaa"));
    // console.log(this.hasNoMeanLetters("abcdffaa"));
    // console.log(this.hasTwoPairs("abcdffaa"));
    // console.log(this.isValid("abcdffaa"));
  }

  isValid(pass) {
    return (
      this.hasThreeIncreasing(pass) &&
      this.hasNoMeanLetters(pass) &&
      this.hasTwoPairs(pass)
    );
  }

  hasTwoPairs(pass) {
    let firstPair;
    for (let i = 0; i < pass.length - 1; i++) {
      if (pass[i] === pass[i + 1]) {
        if (firstPair) {
          if (firstPair !== pass[i]) return true;
        } else {
          firstPair = pass[i];
        }
      }
    }
    return false;
  }

  hasNoMeanLetters(pass) {
    return !pass.includes("i") && !pass.includes("o") && !pass.includes("l");
  }

  hasThreeIncreasing(pass) {
    for (let i = 0; i < pass.length - 2; i++) {
      // console.log(
      //   pass.charCodeAt(i),
      //   pass.charCodeAt(i + 1),
      //   pass.charCodeAt(i + 2)
      // );
      // console.log(pass[i] + pass[i + 1] + pass[i + 2]);
      // console.log(
      //   pass.charCodeAt(i),
      //   pass.charCodeAt(i + 1),
      //   pass.charCodeAt(i + 2)
      // );
      if (
        pass.charCodeAt(i) + 1 === pass.charCodeAt(i + 1) &&
        pass.charCodeAt(i) + 2 === pass.charCodeAt(i + 2)
      ) {
        return true;
      }
    }
    return false;
  }

  increment(pass) {
    pass = pass.split("");
    for (let i = pass.length - 1; i >= 0; i--) {
      if (pass[i] === "z") {
        pass[i] = "a";
      } else {
        pass[i] = String.fromCharCode(pass[i].charCodeAt(0) + 1);
        return pass.join("");
      }
    }
    return pass.join("");
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

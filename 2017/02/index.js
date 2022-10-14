class AdventOfCode {
  constructor(raw_data) {
    this.nums = this.parseInfos(raw_data);
  }

  part_one() {
    let total = 0;
    this.nums.forEach((line) => {
      total += Math.max(...line) - Math.min(...line);
    });
    return total;
  }

  part_two() {
    let total = 0;
    this.nums.forEach((line) => {
      total += this.findDivisors(line);
    });
    return total;
  }

  findDivisors(arr) {
    const sortedArr = arr.sort((x, y) => y - x);
    for (let i = 0; i < sortedArr.length - 1; i++) {
      let firstNum = sortedArr[i];
      for (let j = i + 1; j < sortedArr.length; j++) {
        if (firstNum % sortedArr[j] === 0) {
          return firstNum / sortedArr[j];
        }
      }
    }
    throw new Error("Didn't find divisors in array :", arr);
  }

  parseInfos(raw_data) {
    return raw_data[0].includes("\t")
      ? raw_data.map((line) => line.split("\t").map(Number))
      : raw_data.map((line) => line.split(" ").map(Number));
  }
}

module.exports = AdventOfCode;

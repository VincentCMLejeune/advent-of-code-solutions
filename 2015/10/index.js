class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one(iterations) {
    let arr = [...this.infos];
    for (let i = 0; i < iterations; i++) {
      arr = this.iterate(arr);
    }
    return arr.length;
  }

  iterate(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      let quantity = 1;
      if (arr[i + 1] && arr[i + 1] === val) {
        i++;
        quantity++;
        if (arr[i + 1] && arr[i + 1] === val) {
          i++;
          quantity++;
        }
      }
      newArr.push(quantity);
      newArr.push(val);
    }
    return newArr;
  }

  parseInfos(raw_data) {
    return raw_data.split("").map(Number);
  }
}

module.exports = AdventOfCode;

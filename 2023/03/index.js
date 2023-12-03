class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let res = 0;
    for (let num of this.infos.numbers) {
      if (this.hasNeighboringSymbol(num)) {
        res += num.value;
      }
    }
    return res;
  }

  hasNeighboringSymbol(num) {
    for (let i = num.y - 1; i <= num.y + num.digits; i++) {
      if (this.infos.symbols[num.x - 1]) {
        if (this.infos.symbols[num.x - 1][i]) {
          console.log(`${this.infos.symbols[num.x - 1][i]} up to ${num.value}`);
          return true;
        }
      }
    }

    if (this.infos.symbols[num.x]) {
      if (this.infos.symbols[num.x][num.y - 1]) {
        console.log(
          `${this.infos.symbols[num.x][num.y - 1]} left to ${num.value}`
        );
        return true;
      }
      if (this.infos.symbols[num.x][num.y + num.digits]) {
        console.log(
          `${this.infos.symbols[num.x][num.y + num.digits]} right to ${
            num.value
          }`
        );
        return true;
      }
    }

    for (let i = num.y - 1; i <= num.y + num.digits; i++) {
      if (this.infos.symbols[num.x + 1]) {
        if (this.infos.symbols[num.x + 1][i]) {
          console.log(
            `${this.infos.symbols[num.x + 1][i]} down to ${num.value}`
          );
          return true;
        }
      }
    }
    return false;
  }

  part_two() {
    return true;
  }

  isDigit(char) {
    return /^\d$/.test(char);
  }

  encircleData(data) {
    let encircledData = [];
    let width = data[0].length + 2;
    let emptyRow = "";
    for (let i = 0; i < width; i++) {
      emptyRow += ".";
    }
    encircledData.push(emptyRow);
    for (let row of data) {
      encircledData.push("." + row + ".");
    }
    encircledData.push(emptyRow);
    return encircledData;
  }

  parseInfos(raw_data) {
    raw_data = this.encircleData(raw_data);
    const data = {
      numbers: [],
      symbols: {},
    };
    for (let i = 0; i < raw_data.length; i++) {
      let row = raw_data[i];
      for (let j = 0; j < row.length; j++) {
        let curNum = { value: 0, digits: 0, x: 0, y: 0 };
        let curChar = row[j];
        if (curChar !== ".") {
          if (this.isDigit(curChar)) {
            let num = curChar;
            curNum.x = i;
            curNum.y = j;
            while (j < row.length && this.isDigit(row[j + 1])) {
              num += row[j + 1];
              j++;
            }
            curNum.digits = num.length;
            curNum.value = Number(num);
            data.numbers.push(curNum);
          } else {
            if (data.symbols[i]) {
              data.symbols[i][j] = curChar;
            } else {
              data.symbols[i] = {};
              data.symbols[i][j] = curChar;
            }
          }
        }
      }
    }
    return data;
  }
}

module.exports = AdventOfCode;

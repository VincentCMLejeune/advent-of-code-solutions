class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.values = {};
  }

  part_one() {
    let allInfos = [...this.infos];
    while (allInfos.length !== 0) {
      for (let i = allInfos.length - 1; i >= 0; i--) {
        let info = allInfos[i];
        let processedValues = this.processValues(info.values);
        if (processedValues === null) continue;
        switch (info.op) {
          case "IS":
            this.values[info.target] = processedValues[0];
            break;
          case "AND":
            this.values[info.target] = this.andOperator(processedValues);
            break;
          case "OR":
            this.values[info.target] = this.orOperator(processedValues);
            break;
          case "LSHIFT":
            this.values[info.target] = this.lshiftOperator(processedValues);
            break;
          case "RSHIFT":
            this.values[info.target] = this.rshiftOperator(processedValues);
            break;
          case "NOT":
            this.values[info.target] = this.notOperator(processedValues);
            break;
          default:
            throw new Error(`Did not recognise instructions line ${info}`);
        }
        allInfos.splice(i, 1);
      }
    }
    return this.values.a ? this.values.a : true;
  }

  part_two(a) {
    return "meow"
  }

  processValues(values) {
    const processedValues = [];
    for (let value of values) {
      if (typeof value === "number") {
        processedValues.push(value);
      } else if (this.values[value] !== undefined) {
        processedValues.push(this.values[value]);
      } else {
        return null;
      }
    }
    return processedValues;
  }

  notOperator(arr) {
    let x = this.parse16bits(arr[0]);
    let z = x.map((char) => (char === 1 ? 0 : 1));
    return this.getNumFromBits(z);
  }

  rshiftOperator(arr) {
    let x = this.parse16bits(arr[0]);
    let y = arr[1];
    for (let i = 0; i < y; i++) {
      x.pop();
      x.unshift(0);
    }
    return this.getNumFromBits(x);
  }

  lshiftOperator(arr) {
    let x = this.parse16bits(arr[0]);
    let y = arr[1];
    for (let i = 0; i < y; i++) {
      x.shift();
      x.push(0);
    }
    return this.getNumFromBits(x);
  }

  orOperator(arr) {
    let x = this.parse16bits(arr[0]);
    let y = this.parse16bits(arr[1]);
    const z = [];
    for (let i = 0; i < x.length; i++) {
      z.push(x[i] === 1 || y[i] === 1 ? 1 : 0);
    }
    return this.getNumFromBits(z);
  }

  andOperator(arr) {
    let x = this.parse16bits(arr[0]);
    let y = this.parse16bits(arr[1]);
    const z = [];
    for (let i = 0; i < x.length; i++) {
      z.push(x[i] === 1 && y[i] === 1 ? 1 : 0);
    }
    return this.getNumFromBits(z);
  }

  parse16bits(num) {
    const arr = [];
    for (let i = 0; i < 16; i++) {
      const curPow = Math.pow(2, 15 - i);
      if (num >= curPow) {
        arr.push(1);
        num -= curPow;
      } else {
        arr.push(0);
      }
    }
    return arr;
  }

  getNumFromBits(arr) {
    let num = 0;
    for (let i = 0; i < 16; i++) {
      num += Math.pow(2, i) * arr[15 - i];
    }
    return num;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      line = line.split(" -> ");
      let target = line[1];
      let value = line[0].split(" ");
      let op;
      let values = [];
      if (value.length === 1) {
        op = "IS";
        values.push(this.tryParsingNum(value[0]));
      } else if (value[0] === "NOT") {
        op = "NOT";
        values.push(value[1]);
      } else if (value[1] === "AND") {
        op = "AND";
        values.push(this.tryParsingNum(value[0]));
        values.push(this.tryParsingNum(value[2]));
      } else if (value[1] === "OR") {
        op = "OR";
        values.push(this.tryParsingNum(value[0]));
        values.push(this.tryParsingNum(value[2]));
      } else if (value[1] === "LSHIFT") {
        op = "LSHIFT";
        values.push(this.tryParsingNum(value[0]));
        values.push(this.tryParsingNum(value[2]));
      } else if (value[1] === "RSHIFT") {
        op = "RSHIFT";
        values.push(this.tryParsingNum(value[0]));
        values.push(this.tryParsingNum(value[2]));
      } else {
        throw new Error(`Did not recognise instruction : ${value}`);
      }
      parsed_data.push({ op, values, target });
    }
    return parsed_data;
  }

  tryParsingNum(elem) {
    if (!isNaN(elem)) {
      return Number(elem);
    } else {
      return elem;
    }
  }
}

module.exports = AdventOfCode;

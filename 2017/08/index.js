class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.values = this.initializeValues();
  }

  part_one() {
    for (let line of this.infos) {
      if (this.checkCondition(line.condition)) {
        this.values[line.key] += line.dir;
      }
    }
    return Math.max(...Object.values(this.values));
  }

  part_two() {
    return true;
  }

  checkCondition(condition) {
    const x = this.values[condition[0]];
    const op = condition[1];
    const y = condition[2];
    switch (op) {
      case "==":
        return x === y;
      case "!=":
        return x !== y;
      case ">=":
        return x >= y;
      case ">":
        return x > y;
      case "<=":
        return x <= y;
      case "<":
        return x < y;
    }
  }

  initializeValues() {
    const val = {};
    for (let line of this.infos) {
      val[line.key] = 0;
    }
    return val;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      const obj = {};
      line = line.split(" ");
      obj.key = line[0];
      obj.dir = line[1] === "inc" ? Number(line[2]) : Number(line[2]) * -1;
      let condition = [];
      condition.push(line[4]);
      condition.push(line[5]);
      condition.push(Number(line[6]));
      obj.condition = condition;
      parsed_data.push(obj);
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

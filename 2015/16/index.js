class AdventOfCode {
  constructor(raw_data) {
    this.sues = this.parseInfos(raw_data);
    this.target = {
      children: 3,
      cats: 7,
      samoyeds: 2,
      pomeranians: 3,
      akitas: 0,
      vizslas: 0,
      goldfish: 5,
      trees: 3,
      cars: 2,
      perfumes: 1,
    };
  }

  part_one() {
    const validSues = [];
    for (let sue of this.sues) {
      if (this.isValid(sue)) {
        validSues.push(sue.id);
      }
    }
    return validSues;
  }

  isValid(sue) {
    for (let key of Object.keys(this.target)) {
      if (sue[key] !== undefined) {
        if (sue[key] !== this.target[key]) {
          return false;
        }
      }
    }
    return true;
  }

  part_two() {
    const validSues = [];
    for (let sue of this.sues) {
      if (this.isValidPartTwo(sue)) {
        validSues.push(sue.id);
      }
    }
    return validSues;
  }

  isValidPartTwo(sue) {
    for (let key of Object.keys(this.target)) {
      if (sue[key] !== undefined) {
        if (key === "cats" || key === "trees") {
          if (sue[key] <= this.target[key]) {
            return false;
          }
        } else if (key === "pomeranians" || key === "goldfish") {
          if (sue[key] >= this.target[key]) {
            return false;
          }
        } else {
          if (sue[key] !== this.target[key]) {
            return false;
          }
        }
      }
    }
    return true;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      let sue = {};
      line = line.split(": ");
      sue.id = Number(line.shift().split(" ")[1]);
      line = line.join(": ");
      for (let elem of line.split(", ")) {
        elem = elem.split(": ");
        sue[elem[0]] = Number(elem[1]);
      }
      parsed_data.push(sue);
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

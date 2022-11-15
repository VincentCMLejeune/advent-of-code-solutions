class AdventOfCode {
  constructor(raw_data) {
    this.happiness_map = this.parseInfos(raw_data);
    this.orders = [];
  }

  part_two() {
    this.addMyself();
    this.permutations(Object.keys(this.happiness_map));
    let maxHappiness = -Infinity;
    for (let order of this.orders) {
      let curHappiness = this.getTotalHappiness(order);
      maxHappiness = Math.max(maxHappiness, curHappiness);
    }
    return maxHappiness;
  }

  addMyself() {
    this.happiness_map["me"] = {};
    for (let name of Object.keys(this.happiness_map)) {
      this.happiness_map["me"][name] = 0;
      this.happiness_map[name]["me"] = 0;
    }
  }

  part_one() {
    this.permutations(Object.keys(this.happiness_map));
    let maxHappiness = -Infinity;
    for (let order of this.orders) {
      let curHappiness = this.getTotalHappiness(order);
      maxHappiness = Math.max(maxHappiness, curHappiness);
    }
    return maxHappiness;
  }

  getTotalHappiness(arr) {
    let happiness = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      happiness += this.happiness_map[arr[i]][arr[i + 1]];
      happiness += this.happiness_map[arr[i + 1]][arr[i]];
    }
    return happiness;
  }

  permutations(arr, r = []) {
    if (arr.length === 0) {
      r.push(r[0]);
      this.orders.push(r);
    } else {
      const first = arr[0];
      for (let i = 0; i <= r.length; i++) {
        this.permutations(
          arr.slice(1),
          r.slice(0, i).concat([first]).concat(r.slice(i))
        );
      }
    }
  }

  parseInfos(raw_data) {
    const happiness_map = {};
    for (let line of raw_data) {
      line = line.split(" ");
      const key = line[0];
      let happiness = Number(line[3]);
      if (line[2] === "lose") happiness *= -1;
      const target = line[10].slice(0, -1);
      if (!happiness_map[key]) happiness_map[key] = {};
      happiness_map[key][target] = happiness;
    }
    return happiness_map;
  }
}

module.exports = AdventOfCode;

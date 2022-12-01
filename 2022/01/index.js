class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let maxCalories = -Infinity;
    for (let calories of this.infos) {
      const allCalories = calories.reduce((x, y) => x + y, 0);
      maxCalories = Math.max(allCalories, maxCalories);
    }
    return maxCalories;
  }

  part_two() {
    let caloriesMap = this.infos.map((allCalories) =>
      allCalories.reduce((x, y) => x + y, 0)
    );
    return caloriesMap
      .sort((x, y) => x - y)
      .slice(-3)
      .reduce((x, y) => x + y, 0);
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    let line = [];
    for (let row of raw_data) {
      if (row.length === 0) {
        parsed_data.push(line);
        line = [];
      } else {
        line.push(Number(row));
      }
    }
    parsed_data.push(line);
    return parsed_data;
  }
}

module.exports = AdventOfCode;

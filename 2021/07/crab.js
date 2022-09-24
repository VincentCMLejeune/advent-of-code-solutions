class Crab {
  constructor(raw_data) {
    this.crabMap = this.parseInfos(raw_data);
    this.crabMapLength = Math.max(...this.crabMap);
  }

  part_one() {
    let minIndex = -1;
    let minFuel = Infinity;
    for (let i = 0; i < this.crabMapLength; i++) {
      let fuelUsed = this.crabMap
        .map((elem) => Math.abs(elem - i))
        .reduce((x, y) => x + y, 0);
      if (fuelUsed < minFuel) {
        minIndex = i;
        minFuel = fuelUsed;
      }
    }
    return minFuel;
  }

  parseInfos(raw_data) {
    return raw_data[0].split(",").map(Number);
  }
}

module.exports = Crab;

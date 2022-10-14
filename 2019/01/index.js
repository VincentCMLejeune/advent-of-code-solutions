class AdventOfCode {
  constructor(raw_data) {
    this.masses = this.parseInfos(raw_data);
  }

  part_one() {
    let total = 0;
    for (let mass of this.masses) {
      total += this.calculateFuel(mass);
    }
    return total;
  }

  calculateFuel(mass) {
    return Math.floor(mass / 3) - 2;
  }

  part_two() {
    let total = 0;
    for (let mass of this.masses) {
      total += this.calculateAllFuel(mass);
    }
    return total;
  }

  calculateAllFuel(mass) {
    let currentMass = Math.floor(mass / 3) - 2;
    if (currentMass <= 0) {
      return 0;
    }
    return currentMass + this.calculateAllFuel(currentMass);
  }

  parseInfos(raw_data) {
    return raw_data.map(Number);
  }
}

module.exports = AdventOfCode;

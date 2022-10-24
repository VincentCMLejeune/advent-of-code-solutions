class AdventOfCode {
  constructor(raw_data) {
    this.orbitMap = this.parseInfos(raw_data);
  }

  part_one() {
    // console.log(this.orbitMap);
    let orbitsCount = 0;
    for (let planet of Object.keys(this.orbitMap)) {
      orbitsCount += this.countOrbits(planet);
    }
    return orbitsCount;
  }

  countOrbits(satellite, curOrbits = 0) {
    curOrbits++;
    let planet = this.orbitMap[satellite];
    return planet === "COM" ? curOrbits : this.countOrbits(planet, curOrbits);
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const orbitMap = {};
    for (let line of raw_data) {
      line = line.split(")");
      orbitMap[line[1]] = line[0];
    }
    return orbitMap;
  }
}

module.exports = AdventOfCode;

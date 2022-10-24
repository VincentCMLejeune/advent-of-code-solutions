class AdventOfCode {
  constructor(raw_data) {
    this.orbitMap = this.parseInfos(raw_data);
  }

  part_one() {
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
    const sanMap = this.getMapToCOM("SAN");
    const youMap = this.getMapToCOM("YOU");
    sanMap.shift();
    youMap.shift();
    sanMap.reverse();
    youMap.reverse();
    while (youMap[0] === sanMap[0]) {
      youMap.shift();
      sanMap.shift();
    }
    return youMap.length + sanMap.length;
  }

  getMapToCOM(satellite, curMap = []) {
    curMap.push(satellite);
    let planet = this.orbitMap[satellite];
    return planet === "COM" ? curMap : this.getMapToCOM(planet, curMap);
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

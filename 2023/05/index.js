class AdventOfCode {
  constructor(raw_data) {
    this.almanac = this.parseInfos(raw_data);
  }

  part_one() {
    const orderList = [
      "soil",
      "fertilizer",
      "water",
      "light",
      "temperature",
      "humidity",
      "location",
    ];
    let minLocation = Infinity;
    for (let seed of this.almanac.seeds) {
      let value = seed;
      for (let order of orderList) {
        let usedMap = this.almanac.maps.filter((elem) => elem.to === order)[0];
        value = this.processSeed(value, usedMap.maps);
      }
      if (value < minLocation) {
        minLocation = value;
      }
    }
    return minLocation;
  }

  processSeed(seed, maps) {
    for (let row of maps) {
      if (seed >= row.source && seed <= row.source + row.range - 1) {
        return row.destination + (seed - row.source);
      }
    }
    return seed;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    let parsedData = {};
    parsedData.seeds = raw_data[0].split("seeds: ")[1].split(" ").map(Number);
    parsedData.maps = [];
    let currentMap = {};
    for (let i = 2; i < raw_data.length; i++) {
      let line = raw_data[i];
      if (line === "") {
        parsedData.maps.push(currentMap);
        currentMap = {};
      } else if (line.includes("map")) {
        let mapValues = line.split(" map")[0].split("-to-");
        currentMap.from = mapValues[0];
        currentMap.to = mapValues[1];
        currentMap.maps = [];
      } else {
        let ranges = line.split(" ").map(Number);
        let currentRange = {};
        currentRange.destination = ranges[0];
        currentRange.source = ranges[1];
        currentRange.range = ranges[2];
        currentMap.maps.push(currentRange);
      }
    }
    parsedData.maps.push(currentMap);
    currentMap = {};
    return parsedData;
  }
}

module.exports = AdventOfCode;

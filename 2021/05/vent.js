class Vent {
  constructor(raw_data) {
    this.diagrams = this.parseInfos(raw_data);
  }

  populateMap() {
    let map = this.createMap();
    for (let diagram of this.diagrams) {
      if (diagram.x1 === diagram.x2) {
        let origin = diagram.x1;
        let start = Math.min(diagram.y1, diagram.y2);
        let end = Math.max(diagram.y1, diagram.y2);
        for (let i = start; i <= end; i++) {
          map[i][origin]++;
        }
      } else if (diagram.y1 === diagram.y2) {
        let origin = diagram.y1;
        let start = Math.min(diagram.x1, diagram.x2);
        let end = Math.max(diagram.x1, diagram.x2);
        for (let i = start; i <= end; i++) {
          map[origin][i]++;
        }
      }
    }
    return map;
  }

  partOne() {
    let populatedMap = this.populateMap();
    return populatedMap.flat().filter((num) => num > 1).length;
  }

  createMap() {
    let map = [];
    for (let i = 0; i < 1000; i++) {
      let row = [];
      for (let j = 0; j < 1000; j++) {
        row.push(0);
      }
      map.push(row);
    }
    return map;
  }

  parseInfos(raw_data) {
    let processedData = [];
    for (let data of raw_data) {
      data = data
        .split(" -> ")
        .map((data) => data.split(","))
        .flat()
        .map(Number);
      processedData.push({
        x1: data[0],
        y1: data[1],
        x2: data[2],
        y2: data[3],
      });
    }
    return processedData;
  }
}

module.exports = Vent;

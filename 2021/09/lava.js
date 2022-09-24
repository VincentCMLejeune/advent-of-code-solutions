class Lava {
  constructor(raw_data) {
    this.map = this.parseInfos(raw_data);
  }

  part_one() {
    let lowPoints = this.findLowPoints(this.map);
    return lowPoints.reduce((x, y) => x + y, 0) + lowPoints.length;
  }

  findLowPoints(map) {
    let lowPoints = [];
    for (let i = 1; i < map.length - 1; i++) {
      for (let j = 1; j < map[i].length - 1; j++) {
        if (
          map[i][j] < map[i + 1][j] &&
          map[i][j] < map[i - 1][j] &&
          map[i][j] < map[i][j + 1] &&
          map[i][j] < map[i][j - 1]
        ) {
          // console.log("Low point found at coordinates : " + i + "," + j);
          lowPoints.push(map[i][j]);
        }
      }
    }
    console.log(lowPoints);
    return lowPoints;
  }

  newHighRow(len) {
    let row = [];
    for (let i = 0; i < len; i++) {
      row.push(9);
    }
    return row;
  }

  parseInfos(raw_data) {
    let processed_data = [];
    let rawLength = raw_data[0].length;
    processed_data.push(this.newHighRow(rawLength + 2));
    for (let row of raw_data) {
      let newRow = [];
      newRow.push(9);
      for (let i = 0; i < rawLength; i++) {
        newRow.push(Number(row[i]));
      }
      newRow.push(9);
      processed_data.push(newRow);
    }
    processed_data.push(this.newHighRow(rawLength + 2));
    return processed_data;
  }
}

module.exports = Lava;

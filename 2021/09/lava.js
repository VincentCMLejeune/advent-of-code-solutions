class Lava {
  constructor(raw_data) {
    this.map = this.parseInfos(raw_data);
  }

  part_one() {
    let lowPoints = this.findLowPoints(this.map);
    return lowPoints.reduce((x, y) => x + y, 0) + lowPoints.length;
  }

  part_two() {
    let lowPointsCoordinates = this.findLowPointsCoordinates(this.map);
    let basinsLengths = lowPointsCoordinates
      .map((coordinates) => {
        return this.findBasins(coordinates);
      })
      .map((basins) => basins.length);
    let threeBiggestLengths = basinsLengths.sort((x, y) => x - y).slice(-3);
    return threeBiggestLengths.reduce((x, y) => x * y, 1);
  }

  findBasins(startCoordinates) {
    let visitedCoordinates = [startCoordinates];
    let index = 0;
    while (index < visitedCoordinates.length) {
      let coordinatesTocheck = visitedCoordinates[index];
      let i = coordinatesTocheck[0];
      let j = coordinatesTocheck[1];
      index++;
      if (
        this.map[i + 1][j] !== 9 &&
        this.map[i + 1][j] &&
        this.noArrayAtCoordinates(visitedCoordinates, i + 1, j)
      ) {
        visitedCoordinates.push([i + 1, j]);
      }
      if (
        this.map[i - 1][j] !== 9 &&
        this.map[i - 1][j] &&
        this.noArrayAtCoordinates(visitedCoordinates, i - 1, j)
      ) {
        visitedCoordinates.push([i - 1, j]);
      }
      if (
        this.map[i][j + 1] !== 9 &&
        this.map[i][j + 1] &&
        this.noArrayAtCoordinates(visitedCoordinates, i, j + 1)
      ) {
        visitedCoordinates.push([i, j + 1]);
      }
      if (
        this.map[i][j - 1] !== 9 &&
        this.map[i][j - 1] &&
        this.noArrayAtCoordinates(visitedCoordinates, i, j - 1)
      ) {
        visitedCoordinates.push([i, j - 1]);
      }
    }
    return visitedCoordinates;
  }

  noArrayAtCoordinates(arr, i, j) {
    for (let value of arr) {
      if (value[0] === i) {
        if (value[1] === j) {
          return false;
        }
      }
    }
    return true;
  }

  findLowPointsCoordinates(map) {
    let lowPoints = [];
    for (let i = 1; i < map.length - 1; i++) {
      for (let j = 1; j < map[i].length - 1; j++) {
        if (
          map[i][j] < map[i + 1][j] &&
          map[i][j] < map[i - 1][j] &&
          map[i][j] < map[i][j + 1] &&
          map[i][j] < map[i][j - 1]
        ) {
          lowPoints.push([i, j]);
        }
      }
    }
    return lowPoints;
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
          lowPoints.push(map[i][j]);
        }
      }
    }
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

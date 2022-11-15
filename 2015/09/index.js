class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.distances = this.infos.distances;
    this.cities = this.infos.cities;
    this.paths = [];
  }

  part_one() {
    let cities = [...this.cities];
    this.permutations(cities);
    let minDist = Infinity;
    for (let path of this.paths) {
      let curDist = 0;
      for (let i = 0; i < path.length - 1; i++) {
        curDist += this.distances[path[i]][path[i + 1]];
      }
      minDist = Math.min(curDist, minDist);
    }

    return minDist;
  }

  part_two() {
    return true;
  }

  permutations(arr, r = []) {
    if (arr.length === 0) {
      this.paths.push(r);
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
    const parsed_data = {
      distances: {},
      cities: [],
    };
    for (let line of raw_data) {
      line = line.split(" = ");
      let currentCities = line[0].split(" ");
      currentCities.splice(1, 1);
      const distance = Number(line[1]);
      for (let city of currentCities) {
        if (!parsed_data.cities.includes(city)) {
          parsed_data.cities.push(city);
          parsed_data.distances[city] = {};
        }
      }
      parsed_data.distances[currentCities[0]][currentCities[1]] = distance;
      parsed_data.distances[currentCities[1]][currentCities[0]] = distance;
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

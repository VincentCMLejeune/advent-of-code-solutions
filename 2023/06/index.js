class AdventOfCode {
  constructor(raw_data) {
    this.races = this.parseInfos(raw_data);
  }

  part_one() {
    let res = 1;
    for (let race of this.races) {
      let firstWinningValue = this.getFirstWinningValue(
        race.time,
        race.distance
      );
      let lastWinningValue = this.getLastWinningValue(race.time, race.distance);
      res *= lastWinningValue - firstWinningValue + 1;
    }
    return res;
  }

  getFirstWinningValue(time, distanceToBeat) {
    for (let i = 0; i < time; i++) {
      let charging = i;
      let running = time - i;
      let currentDistance = charging * running;
      if (currentDistance > distanceToBeat) {
        return i;
      }
    }
  }

  getLastWinningValue(time, distanceToBeat) {
    for (let i = time; i > 0; i--) {
      let charging = i;
      let running = time - i;
      let currentDistance = charging * running;
      if (currentDistance > distanceToBeat) {
        return i;
      }
    }
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    let parsed_data = [];
    let times = raw_data[0]
      .split("Time:")[1]
      .split(" ")
      .filter((elem) => elem != "")
      .map(Number);
    let distances = raw_data[1]
      .split("Distance:")[1]
      .split(" ")
      .filter((elem) => elem != "")
      .map(Number);
    for (let i = 0; i < times.length; i++) {
      parsed_data.push({
        time: times[i],
        distance: distances[i],
      });
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

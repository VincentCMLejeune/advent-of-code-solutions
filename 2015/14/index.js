class AdventOfCode {
  constructor(raw_data) {
    this.reindeers = this.parseInfos(raw_data);
  }

  part_one(seconds) {
    let maxDist = -Infinity;
    for (let reindeer of Object.keys(this.reindeers)) {
      maxDist = Math.max(
        maxDist,
        this.getDistance(this.reindeers[reindeer], seconds)
      );
    }
    return maxDist;
  }

  getDistance(reindeer, seconds) {
    const fullPeriod = reindeer.runPeriod + reindeer.restPeriod;
    const numberPeriods = Math.floor(seconds / fullPeriod);
    let distance = reindeer.speed * reindeer.runPeriod * numberPeriods;
    const remainingPeriod = seconds - fullPeriod * numberPeriods;
    return (
      distance + reindeer.speed * Math.min(reindeer.runPeriod, remainingPeriod)
    );
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const speeds = {};
    for (let line of raw_data) {
      line = line.split(" ");
      const key = line[0];
      const speed = Number(line[3]);
      const runPeriod = Number(line[6]);
      const restPeriod = Number(line[13]);
      speeds[key] = { speed, runPeriod, restPeriod };
    }
    return speeds;
  }
}

module.exports = AdventOfCode;

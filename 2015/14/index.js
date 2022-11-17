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

  part_two(seconds) {
    this.addDetailsToReindeers();
    for (let sec = 1; sec <= seconds; sec++) {
      for (let reindeer of Object.keys(this.reindeers)) {
        this.move(reindeer);
      }
      this.attributePoint();
    }
    return this.getWinnerScore();
  }

  getWinnerScore() {
    let winner;
    let maxPoints = -Infinity;
    for (let reindeer of Object.keys(this.reindeers)) {
      if (this.reindeers[reindeer].points > maxPoints) {
        winner = [reindeer];
        maxPoints = this.reindeers[reindeer].points;
      }
    }
    return this.reindeers[winner].points;
  }

  attributePoint() {
    let winners;
    let maxDistance = -Infinity;
    for (let reindeer of Object.keys(this.reindeers)) {
      if (this.reindeers[reindeer].distance > maxDistance) {
        winners = [reindeer];
        maxDistance = this.reindeers[reindeer].distance;
      } else if (this.reindeers[reindeer].distance === maxDistance) {
        winners.push(reindeer);
      }
    }
    for (let winner of winners) {
      this.reindeers[winner].points++;
    }
  }

  move(reindeer) {
    if (this.reindeers[reindeer].remaining === 0) {
      this.reindeers[reindeer].action =
        this.reindeers[reindeer].action === "running" ? "resting" : "running";
      this.reindeers[reindeer].remaining =
        this.reindeers[reindeer].action === "running"
          ? this.reindeers[reindeer].runPeriod
          : this.reindeers[reindeer].restPeriod;
    }
    if (this.reindeers[reindeer].action === "running") {
      this.reindeers[reindeer].distance += this.reindeers[reindeer].speed;
    }
    this.reindeers[reindeer].remaining--;
  }

  addDetailsToReindeers() {
    for (let reindeer of Object.keys(this.reindeers)) {
      this.reindeers[reindeer].distance = 0;
      this.reindeers[reindeer].points = 0;
      this.reindeers[reindeer].action = "running";
      this.reindeers[reindeer].remaining = this.reindeers[reindeer].runPeriod;
    }
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

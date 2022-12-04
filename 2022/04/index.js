class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    let count = 0;
    for (let line of this.infos) {
      if (
        (line.first.start >= line.second.start &&
          line.first.end <= line.second.end) ||
        (line.first.start <= line.second.start &&
          line.first.end >= line.second.end)
      ) {
        count++;
      }
    }
    return count;
  }

  part_two() {
    let count = 0;
    for (let line of this.infos) {
      if (
        (line.first.start >= line.second.start &&
          line.first.start <= line.second.end) ||
        (line.first.end >= line.second.start &&
          line.first.end <= line.second.end) ||
        (line.second.start >= line.first.start &&
          line.second.start <= line.first.end) ||
        (line.second.end >= line.first.start &&
          line.second.end <= line.first.end)
      ) {
        count++;
      }
    }
    return count;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      line = line.split(",").map((elem) => elem.split("-"));
      parsed_data.push({
        first: {
          start: Number(line[0][0]),
          end: Number(line[0][1]),
        },
        second: {
          start: Number(line[1][0]),
          end: Number(line[1][1]),
        },
      });
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

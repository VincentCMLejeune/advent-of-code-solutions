class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    for (let line of this.infos) {
      if (!this.isChildren(line.key)) return line.key
    }
  }

  isChildren(str) {
    for (let line of this.infos) {
      if (line.children && line.children.includes(str)) return true;
    }
    return false;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      const curLine = {};
      line = line.split(" -> ");
      let x = line[0].split(" (");
      curLine.key = x[0];
      curLine.value = Number(x[1].slice(0, -1));
      if (line.length === 2) curLine.children = line[1].split(", ");
      parsed_data.push(curLine);
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

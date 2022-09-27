const path = require("path");

class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    // console.log(this.infos);
  }

  part_one() {
    // console.log(this.infos);
    const paths = this.getPathsFromMap(this.infos);
    // console.log(paths);
    return paths.length;
  }

  getPathsFromMap(map, current = "start", path = []) {
    const paths = [];
    // console.log(map);
    // console.log(map["links"][current]);
    for (let link of map[current]) {
      if (link === "end") {
        paths.push([...path, link]);
      } else if (this.canGoTo(link, path)) {
        paths.push(...this.getPathsFromMap(map, link, [...path, link]));
      }
    }
    return paths;
  }

  canGoTo(link, path) {
    if (link === link.toUpperCase()) {
      return true;
    } else {
      return !path.includes(link);
    }
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const map = {};
    for (let row of raw_data) {
      const [from, to] = row.split("-");
      if (from !== "end" && to !== "start") {
        map[from] = map[from] || [];
        map[from].push(to);
      }
      if (to !== "end" && from !== "start") {
        map[to] = map[to] || [];
        map[to].push(from);
      }
    }
    return map;
  }
}

module.exports = AdventOfCode;

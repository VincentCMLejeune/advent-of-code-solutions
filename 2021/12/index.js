const path = require("path");

class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    const paths = this.getPathsFromMap(this.infos);
    return paths.length;
  }

  getPathsFromMap(map, current = "start", path = []) {
    const paths = [];
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
    const paths = this.getPathsFromMapPartTwo(this.infos);
    return paths.length;
  }

  getPathsFromMapPartTwo(map, current = "start", path = []) {
    const paths = [];
    for (let link of map[current]) {
      if (link === "end") {
        paths.push([...path, link]);
      } else if (this.canGoToPartTwo(link, path)) {
        paths.push(...this.getPathsFromMapPartTwo(map, link, [...path, link]));
      }
    }
    return paths;
  }

  canGoToPartTwo(link, path) {
    const lowerCasePath = path.filter((p) => p === p.toLowerCase());
    if (link === link.toUpperCase()) {
      return true;
    } else if (this.hasNoDouble(lowerCasePath)) {
      return true;
    } else if (path.includes(link)) {
      return false;
    } else {
      for (let value of lowerCasePath) {
        if (lowerCasePath.indexOf(value) !== lowerCasePath.lastIndexOf(value)) {
          if (link === value) {
            return false;
          }
        }
      }
      return true;
    }
  }

  hasNoDouble(arr) {
    let res = arr.length === [...new Set(arr)].length;
    return res;
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

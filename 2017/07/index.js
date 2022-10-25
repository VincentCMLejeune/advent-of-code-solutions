class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
  }

  part_one() {
    for (let line of this.infos) {
      if (!this.isChildren(line.key)) return line.key;
    }
  }

  isChildren(str) {
    for (let line of this.infos) {
      if (line.children && line.children.includes(str)) return true;
    }
    return false;
  }

  part_two() {
    let root = this.part_one();
    return this.getDifferentChild(root);
  }

  getDifferentChild(key, diff = 0) {
    const node = this.infos.find((elem) => elem.key === key);
    if (!node.children) return node.weight + diff;
    const children = node.children.map((childKey) =>
      this.infos.find((elem) => elem.key === childKey)
    );
    const values = [];
    for (let child of children) {
      values.push({
        key: child.key,
        weight: this.getWeight(child),
      });
    }
    for (let i = 0; i < values.length; i++) {
      const curWeight = values[i].weight;
      if (values.filter((value) => value.weight === curWeight).length === 1) {
        let majorWeight = values[i === 0 ? 1 : 0].weight;
        let diffWeight = majorWeight - values[i].weight;
        return this.getDifferentChild(values[i].key, diffWeight);
      }
    }
    return node.weight + diff;
  }

  getWeight(node) {
    if (!node.children) {
      return node.weight;
    } else {
      return node.children.reduce(
        (prevChild, childKey) =>
          prevChild +
          this.getWeight(this.infos.find((elem) => elem.key === childKey)),
        node.weight
      );
    }
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      const curLine = {};
      line = line.split(" -> ");
      let x = line[0].split(" (");
      curLine.key = x[0];
      curLine.weight = Number(x[1].slice(0, -1));
      if (line.length === 2) curLine.children = line[1].split(", ");
      parsed_data.push(curLine);
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

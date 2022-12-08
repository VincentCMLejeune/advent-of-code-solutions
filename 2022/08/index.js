class AdventOfCode {
  constructor(raw_data) {
    this.trees = this.parseInfos(raw_data);
    this.diam = this.trees[0].length;
  }

  part_one() {
    let visible = 0;
    for (let i = 0; i < this.diam; i++) {
      for (let j = 0; j < this.diam; j++) {
        if (this.isOnEdge(i, j)) {
          visible++;
        } else if (this.isVisible(i, j)) {
          visible++;
        }
      }
    }
    return visible;
  }

  isVisible(i, j) {
    const target = this.trees[i][j];
    let upTrees = [];
    let downTrees = [];
    let leftTrees = [];
    let rightTrees = [];

    for (let x = 0; x < i; x++) {
      upTrees.push(this.trees[x][j]);
    }

    for (let x = i + 1; x < this.diam; x++) {
      downTrees.push(this.trees[x][j]);
    }

    for (let x = 0; x < j; x++) {
      leftTrees.push(this.trees[i][x]);
    }

    for (let x = j + 1; x < this.diam; x++) {
      rightTrees.push(this.trees[i][x]);
    }

    return (
      upTrees.every((tree) => tree < target) ||
      downTrees.every((tree) => tree < target) ||
      leftTrees.every((tree) => tree < target) ||
      rightTrees.every((tree) => tree < target)
    );
  }

  isOnEdge(i, j) {
    return i === 0 || j === 0 || i === this.diam || j === this.diam;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split("").map((digit) => Number(digit)));
  }
}

module.exports = AdventOfCode;

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
    return i === 0 || j === 0 || i === this.diam - 1 || j === this.diam - 1;
  }

  part_two() {
    let scenicScore = -Infinity;
    for (let i = 0; i < this.diam; i++) {
      for (let j = 0; j < this.diam; j++) {
        if (!this.isOnEdge(i, j)) {
          let currentScore = this.getScenicScore(i, j);
          scenicScore = Math.max(scenicScore, currentScore);
        }
      }
    }

    return scenicScore;
  }

  getScenicScore(i, j) {
    const target = this.trees[i][j];
    let score = 1;
    if (i !== 0) {
      let upView = 1;
      for (let x = i - 1; x > 0; x--) {
        if (this.trees[x][j] >= target) {
          break;
        }
        upView++;
      }
      score *= upView;
    }

    if (i !== this.diam) {
      let downView = 1;
      for (let x = i + 1; x < this.diam - 1; x++) {
        if (this.trees[x][j] >= target) {
          break;
        }
        downView++;
      }
      score *= downView;
    }

    if (j !== 0) {
      let leftView = 1;
      for (let x = j - 1; x > 0; x--) {
        if (this.trees[i][x] >= target) {
          break;
        }
        leftView++;
      }
      score *= leftView;
    }

    if (j !== this.diam) {
      let rightView = 1;
      for (let x = j + 1; x < this.diam - 1; x++) {
        if (this.trees[i][x] >= target) {
          break;
        }
        rightView++;
      }
      score *= rightView;
    }

    return score;
  }

  parseInfos(raw_data) {
    return raw_data.map((line) => line.split("").map((digit) => Number(digit)));
  }
}

module.exports = AdventOfCode;

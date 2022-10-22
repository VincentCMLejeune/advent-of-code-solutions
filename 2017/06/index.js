class AdventOfCode {
  constructor(raw_data) {
    this.blocks = this.parseInfos(raw_data);
  }

  part_one() {
    let iterations = 0;
    const previousStates = [];
    const arrLength = this.blocks.length;
    let currentState = this.blocks.map(String).join("");
    do {
      previousStates.push(currentState);
      iterations++;
      let idx = this.findMaxIndex();
      let range = this.blocks[idx];
      this.blocks[idx] = 0;
      for (let val = 1; val <= range; val++) {
        let curIdx = (idx + val) % arrLength;
        this.blocks[curIdx]++;
      }
      currentState = this.blocks.map(String).join("");
    } while (previousStates.indexOf(currentState) === -1);
    return iterations;
  }

  findMaxIndex() {
    let maxValue = -Infinity;
    let maxIdx;
    for (let i = 0; i < this.blocks.length; i++) {
      if (this.blocks[i] > maxValue) {
        maxValue = this.blocks[i];
        maxIdx = i;
      }
    }
    return maxIdx;
  }

  part_two() {
    let iterations = 0;
    const previousStates = [];
    const previousStatesDate = {};
    const arrLength = this.blocks.length;
    let currentState = this.blocks.map(String).join("");
    previousStatesDate[currentState] = iterations;
    do {
      previousStates.push(currentState);
      iterations++;
      let idx = this.findMaxIndex();
      let range = this.blocks[idx];
      this.blocks[idx] = 0;
      for (let val = 1; val <= range; val++) {
        let curIdx = (idx + val) % arrLength;
        this.blocks[curIdx]++;
      }
      currentState = this.blocks.map(String).join("");
      if (previousStates.indexOf(currentState) !== -1) {
        break
      }
      previousStatesDate[currentState] = iterations;
    } while (previousStates.indexOf(currentState) === -1);
    return iterations - previousStatesDate[currentState];
  }

  parseInfos(raw_data) {
    return raw_data.split(/[ \t]+/).map(Number);
  }
}

module.exports = AdventOfCode;

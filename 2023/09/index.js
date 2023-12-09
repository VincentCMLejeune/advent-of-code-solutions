class AdventOfCode {
  constructor(raw_data) {
    this.histories = this.parseInfos(raw_data);
  }

  part_one() {
    let res = 0;
    for (let history of this.histories) {
      let predictions = this.addPredictions(history);
      let historyValue = 0;
      for (let prediction of predictions) {
        historyValue += prediction[prediction.length - 1];
      }
      res += historyValue;
    }
    return res;
  }

  addPredictions(history) {
    let allHistories = [history];
    let currentRow = history;
    while (!currentRow.every((num) => num === 0)) {
      let newRow = [];
      for (let i = 0; i < currentRow.length - 1; i++) {
        newRow.push(currentRow[i + 1] - currentRow[i]);
      }
      currentRow = newRow;
      allHistories.push(currentRow);
    }
    return allHistories;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    return raw_data.map((row) => row.split(" ").map(Number));
  }
}

module.exports = AdventOfCode;

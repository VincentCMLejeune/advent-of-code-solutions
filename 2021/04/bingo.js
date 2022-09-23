class Bingo {
  constructor(raw_data) {
    let processed_data = this.parseInfos(raw_data);
    this.numbers = processed_data.numbers;
    this.fullBoards = processed_data.fullBoards;
    this.emptyBoards = processed_data.emptyBoards;
  }

  partOneScore() {
    console.log(this.numbers);
    console.log(this.fullBoards);
    console.log(this.emptyBoards);
    return true;
  }

  parseInfos(raw_data) {
    let processed_data = {};
    processed_data.numbers = raw_data[0].split(",").map(Number);
    processed_data.fullBoards = [];
    processed_data.emptyBoards = [];
    let currentFullBoard = [];
    let currentEmptyBoard = [];
    for (let i = 2; i < raw_data.length; i++) {
      if (raw_data[i] === "") {
        processed_data.fullBoards.push(currentFullBoard);
        processed_data.emptyBoards.push(currentEmptyBoard);
        currentFullBoard = [];
        currentEmptyBoard = [];
      } else {
        currentFullBoard.push(
          raw_data[i]
            .split(" ")
            .filter((elem) => elem !== "")
            .map(Number)
        );
        currentEmptyBoard.push(["", "", "", "", ""]);
      }
    }
    processed_data.fullBoards.push(currentFullBoard);
    processed_data.emptyBoards.push(currentEmptyBoard);
    return processed_data;
  }
}

module.exports = Bingo;

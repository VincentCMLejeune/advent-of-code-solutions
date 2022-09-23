class Bingo {
  constructor(raw_data) {
    let processed_data = this.parseInfos(raw_data);
    this.numbers = processed_data.numbers;
    this.boards = processed_data.boards;
  }

  partOneScore() {
    console.log(this.numbers);
    console.log(this.boards);
    return true;
  }

  parseInfos(raw_data) {
    let processed_data = {};
    processed_data.numbers = raw_data[0].split(",").map(Number);
    processed_data.boards = [];
    let currentBoard = [];
    for (let i = 2; i < raw_data.length; i++) {
      if (raw_data[i] === "") {
        processed_data.boards.push(currentBoard);
        currentBoard = [];
      } else {
        currentBoard.push(
          raw_data[i]
            .split(" ")
            .filter((elem) => elem !== "")
            .map(Number)
        );
      }
    }
    processed_data.boards.push(currentBoard);
    return processed_data;
  }
}

module.exports = Bingo;

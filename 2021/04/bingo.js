class Bingo {
  constructor(raw_data) {
    let processed_data = this.parseInfos(raw_data);
    this.numbers = processed_data.numbers;
    this.fullBoards = processed_data.fullBoards;
    this.emptyBoards = processed_data.emptyBoards;
  }

  playBingo() {
    for (let pickedNumber of this.numbers) {
      for (let i = 0; i < this.fullBoards.length; i++) {
        for (let j = 0; j < 5; j++) {
          for (let k = 0; k < 5; k++) {
            if (this.fullBoards[i][j][k] === pickedNumber) {
              this.emptyBoards[i][j][k] = pickedNumber;
              let winningBoard = this.checkWinner();
              if (winningBoard !== false) {
                return {
                  winningBoard: winningBoard,
                  winningFullBoard: this.fullBoards[i],
                  lastPickedNumber: pickedNumber,
                };
              }
            }
          }
        }
      }
    }
  }

  checkWinner() {
    for (let board of this.emptyBoards) {
      for (let i = 0; i < 5; i++) {
        if (
          board[i][0] !== "" &&
          board[i][1] !== "" &&
          board[i][2] !== "" &&
          board[i][3] !== "" &&
          board[i][4] !== ""
        ) {
          return board;
        }
      }
      for (let i = 0; i < 5; i++) {
        if (
          board[0][i] !== "" &&
          board[1][i] !== "" &&
          board[2][i] !== "" &&
          board[3][i] !== "" &&
          board[4][i] !== ""
        ) {
          return board;
        }
      }
    }
    return false;
  }

  sumUnMarkedNumbers(fullBoard, markedBoard) {
    let sum = 0;
    let flattenFullBoard = fullBoard.flat();
    let flattenMarkedBoard = markedBoard.flat();
    for (let i = 0; i < flattenMarkedBoard.length; i++) {
      if (flattenMarkedBoard[i] === "") {
        sum += flattenFullBoard[i];
      }
    }
    return sum;
  }

  partOneScore() {
    let result = this.playBingo();
    let sumUnmarkedNumbers = this.sumUnMarkedNumbers(
      result.winningFullBoard,
      result.winningBoard
    );
    return result.lastPickedNumber * sumUnmarkedNumbers;
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

class Bingo {
  constructor(raw_data) {
    let processed_data = this.parseInfos(raw_data);
    this.numbers = processed_data.numbers;
    this.fullBoards = processed_data.fullBoards;
    this.emptyBoards = processed_data.emptyBoards;
  }

  playBingoPartOne() {
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

  playBingoPartTwo(fullBoards, markedBoards, lastNumberIndex) {
    for (let i = lastNumberIndex + 1; i < this.numbers.length; i++) {
      let pickedNumber = this.numbers[i];
      for (let j = 0; j < 5; j++) {
        for (let k = 0; k < 5; k++) {
          for (let l = 0; l < fullBoards.length; l++) {
            if (fullBoards[l][j][k] === pickedNumber) {
              markedBoards[l][j][k] = pickedNumber;
            }
          }
        }
      }
      let winningBoardsIndexes = this.checkWinners(markedBoards);
      if (winningBoardsIndexes.length !== 0) {
        if (markedBoards.length === 1) {
          return {
            lastFullBoard: fullBoards[0],
            lastMarkedBoard: markedBoards[0],
            lastPickedNumber: this.numbers[i],
          };
        }
        for (let index of winningBoardsIndexes) {
          fullBoards.splice(index, 1);
          markedBoards.splice(index, 1);
        }
        return this.playBingoPartTwo(fullBoards, markedBoards, i);
      }
    }
  }

  checkWinners(markedBoards) {
    let winningBoardsIndexes = [];
    for (let i = markedBoards.length - 1; i >= 0; i--) {
      for (let j = 0; j < 5; j++) {
        if (
          markedBoards[i][j][0] !== "" &&
          markedBoards[i][j][1] !== "" &&
          markedBoards[i][j][2] !== "" &&
          markedBoards[i][j][3] !== "" &&
          markedBoards[i][j][4] !== ""
        ) {
          winningBoardsIndexes.push(i);
        }
      }
      for (let j = 0; j < 5; j++) {
        if (
          markedBoards[i][0][j] !== "" &&
          markedBoards[i][1][j] !== "" &&
          markedBoards[i][2][j] !== "" &&
          markedBoards[i][3][j] !== "" &&
          markedBoards[i][4][j] !== ""
        ) {
          winningBoardsIndexes.push(i);
        }
      }
    }
    return [...new Set(winningBoardsIndexes)];
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

  partTwoScore() {
    let result = this.playBingoPartTwo(this.fullBoards, this.emptyBoards, -1);
    let sumUnMarkedNumbers = this.sumUnMarkedNumbers(
      result.lastFullBoard,
      result.lastMarkedBoard
    );
    return result.lastPickedNumber * sumUnMarkedNumbers;
  }

  partOneScore() {
    let result = this.playBingoPartOne();
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

class AdventOfCode {
  constructor(raw_data) {
    this.moves = this.parseInfos(raw_data);
  }

  part_one() {
    let score = 0;
    for (let move of this.moves) {
      score += this.addScoreMove(move.player);
      score += this.addScoreResult(move.player, move.opponent);
    }
    return score;
  }

  addScoreMove(player) {
    if (player === "X") {
      return 1;
    } else if (player === "Y") {
      return 2;
    } else if (player === "Z") {
      return 3;
    } else {
      throw new Error(`Could not recognise move ${player}`);
    }
  }

  addScoreResult(player, opponent) {
    if (opponent === "A") {
      if (player === "X") {
        return 3;
      } else if (player === "Y") {
        return 6;
      } else if (player === "Z") {
        return 0;
      } else {
        throw new Error(`Could not recognise move ${player}`);
      }
    } else if (opponent === "B") {
      if (player === "X") {
        return 0;
      } else if (player === "Y") {
        return 3;
      } else if (player === "Z") {
        return 6;
      } else {
        throw new Error(`Could not recognise move ${player}`);
      }
    } else if (opponent === "C") {
      if (player === "X") {
        return 6;
      } else if (player === "Y") {
        return 0;
      } else if (player === "Z") {
        return 3;
      } else {
        throw new Error(`Could not recognise move ${player}`);
      }
    } else {
      throw new Error(`Could not recognise move ${opponent}`);
    }
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      line = line.split(" ");
      parsed_data.push({
        opponent: line[0],
        player: line[1],
      });
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

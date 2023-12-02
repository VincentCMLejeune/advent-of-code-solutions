class AdventOfCode {
  constructor(raw_data) {
    this.games = this.parseInfos(raw_data);
  }

  part_one() {
    let res = 0;
    for (let game of this.games) {
      if (this.respectsBagsLimit(game.plays)) {
        res += game.id;
      }
    }
    return res;
  }

  respectsBagsLimit(plays) {
    for (let play of plays) {
      if (play.blue) {
        if (play.blue > 14) {
          return false;
        }
      }
      if (play.green) {
        if (play.green > 13) {
          return false;
        }
      }
      if (play.red) {
        if (play.red > 12) {
          return false;
        }
      }
    }
    return true;
  }

  part_two() {
    let res = 0;
    for (let game of this.games) {
      let minima = this.getLeastPossibleRocks(game.plays);
      res += minima.blue * minima.green * minima.red;
    }
    return res;
  }

  getLeastPossibleRocks(plays) {
    let minima = {
      blue: -Infinity,
      green: -Infinity,
      red: -Infinity,
    };
    for (let play of plays) {
      if (play.blue) {
        if (play.blue > minima.blue) {
          minima.blue = play.blue;
        }
      }
      if (play.green) {
        if (play.green > minima.green) {
          minima.green = play.green;
        }
      }
      if (play.red) {
        if (play.red > minima.red) {
          minima.red = play.red;
        }
      }
    }
    return minima;
  }

  parseInfos(raw_data) {
    let parsedData = [];
    for (let row of raw_data) {
      let newRow = {};
      row = row.split(": ");
      newRow.id = Number(row[0].substring(5));
      let plays = [];
      let rowPlays = row[1].split("; ");
      for (let rowPlay of rowPlays) {
        let sets = {};
        rowPlay = rowPlay.split(", ");
        for (let play of rowPlay) {
          play = play.split(" ");
          sets[play[1]] = Number(play[0]);
        }
        plays.push(sets);
      }
      newRow.plays = plays;
      parsedData.push(newRow);
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

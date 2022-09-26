class AdventOfCode {
  constructor(raw_data) {
    this.fishes = this.parseInfos(raw_data);
    // console.log(this.fishes);
  }

  part_one() {
    let fishes = [...this.fishes];
    // this.printFishes(fishes);
    let count = 0;
    for (let i = 0; i < 100; i++) {
      fishes = this.incrementAllFishPower(fishes);
      let obj = this.flashFishes(fishes);
      fishes = this.uncircleFishes(obj.fishes);
      count += obj.count;
      // this.printFishes(fishes);
    }
    return count;
  }

  flashFishes(fishes) {
    let somethingFlashed = true;
    let flashCount = 0;
    fishes = this.circleFishes(fishes);

    while (somethingFlashed === true) {
      somethingFlashed = false;
      for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
          if (fishes[i][j] > 9) {
            // console.log("Fished flashed at coordinates " + i + ":" + j);
            somethingFlashed = true;
            fishes[i][j] = -100;
            flashCount++;
            fishes[i - 1][j - 1]++;
            fishes[i - 1][j]++;
            fishes[i - 1][j + 1]++;
            fishes[i][j - 1]++;
            fishes[i][j + 1]++;
            fishes[i + 1][j - 1]++;
            fishes[i + 1][j]++;
            fishes[i + 1][j + 1]++;
          }
        }
      }
    }
    fishes = fishes.map((row) => row.map((fish) => (fish < 0 ? 0 : fish)));
    return {
      fishes: fishes,
      count: flashCount,
    };
  }

  circleFishes(fishes) {
    let circledFishes = [];
    circledFishes.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    for (let row of fishes) {
      circledFishes.push([0, ...row, 0]);
    }
    circledFishes.push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    return circledFishes;
  }

  uncircleFishes(fishes) {
    let uncircledFishes = [];
    for (let i = 1; i < 11; i++) {
      uncircledFishes.push(fishes[i].slice(1, 11));
    }
    return uncircledFishes;
  }

  printFishes(fishes) {
    console.log("\n");
    for (let row of fishes) {
      console.log(row.join(""));
    }
  }

  incrementAllFishPower(fishes) {
    return fishes.map((row) => row.map((fish) => fish + 1));
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    // console.log(raw_data)
    let arr = [];
    for (let row of raw_data) {
      arr.push(row.split("").map(Number));
    }
    return arr;
  }
}

module.exports = AdventOfCode;

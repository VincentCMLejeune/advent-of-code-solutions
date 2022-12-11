class AdventOfCode {
  constructor(raw_data) {
    this.monkeys = this.parseInfos(raw_data);
    this.supermodulo = Object.keys(this.monkeys).reduce(
      (a, b) => a * this.monkeys[b].test.divisible,
      1
    );
  }

  part_one() {
    for (let i = 0; i <= 19; i++) {
      for (let monkey of Object.keys(this.monkeys)) {
        while (this.monkeys[monkey].items.length !== 0) {
          let item = this.monkeys[monkey].items.shift();
          this.checkItem(item, monkey);
        }
      }
    }
    const twoInspectiestMonkeys = Object.keys(this.monkeys)
      .sort(
        (monkeyA, monkeyB) =>
          this.monkeys[monkeyB].inspections - this.monkeys[monkeyA].inspections
      )
      .slice(0, 2);
    return (
      this.monkeys[twoInspectiestMonkeys[0]].inspections *
      this.monkeys[twoInspectiestMonkeys[1]].inspections
    );
  }

  checkItem(item, id) {
    this.monkeys[id].inspections++;
    const opRes = Math.floor(
      this.checkOp(item, this.monkeys[id].op) / Number(3)
    );
    this.makeTest(opRes, this.monkeys[id].test);
  }

  makeTest(res, test) {
    if (res % test.divisible === 0) {
      this.monkeys[test.iftrue].items.push(res);
    } else {
      this.monkeys[test.ifalse].items.push(res);
    }
  }

  checkOp(old, op) {
    if (op === "* old") {
      return old * old;
    } else {
      op = op.split(" ");
      let operator = op[0];
      let num = Number(op[1]);
      if (operator === "*") {
        return old * num;
      } else if (operator === "+") {
        return old + num;
      } else {
        throw new Error(`Did not recognise operation ${op}`);
      }
    }
  }

  part_two() {
    for (let i = 1; i <= 10000; i++) {
      const roundsToCheck = [
        1, 20, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
      ];
      for (let monkey of Object.keys(this.monkeys)) {
        while (this.monkeys[monkey].items.length !== 0) {
          let item = this.monkeys[monkey].items.shift();
          this.checkItemWithoutDividingByThree(item, monkey);
        }
      }
      if (roundsToCheck.includes(i)) {
        this.printRound(i);
      }
    }
    const twoInspectiestMonkeys = Object.keys(this.monkeys)
      .sort(
        (monkeyA, monkeyB) =>
          this.monkeys[monkeyB].inspections - this.monkeys[monkeyA].inspections
      )
      .slice(0, 2);
    return (
      this.monkeys[twoInspectiestMonkeys[0]].inspections *
      this.monkeys[twoInspectiestMonkeys[1]].inspections
    );
  }

  checkItemWithoutDividingByThree(item, id) {
    this.monkeys[id].inspections++;
    const opRes =
      Number(this.checkOp(item, this.monkeys[id].op)) % this.supermodulo;
    this.makeTest(opRes, this.monkeys[id].test);
  }

  printRound(i) {
    console.log(`==After Round ${i}==`);
    for (let monkey of Object.keys(this.monkeys)) {
      console.log(
        `Monkey ${monkey} inspected items ${this.monkeys[monkey].inspections} times.`
      );
    }
    console.log("\n");
  }

  parseInfos(raw_data) {
    const parsed_data = {};
    for (let i = 0; i < raw_data.length; i += 7) {
      let monkey = raw_data.slice(i, i + 6);
      const id = Number(monkey[0][monkey[0].length - 2]);
      const items = monkey[1]
        .split("Starting items: ")[1]
        .split(", ")
        .map(Number);
      const op = monkey[2].split("Operation: new = old ")[1];
      const divisible = Number(monkey[3].split("Test: divisible by ")[1]);
      const iftrue = Number(monkey[4][monkey[4].length - 1]);
      const ifalse = Number(monkey[5][monkey[5].length - 1]);
      parsed_data[id] = {
        id,
        items,
        op,
        inspections: 0,
        test: {
          divisible,
          iftrue,
          ifalse,
        },
      };
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

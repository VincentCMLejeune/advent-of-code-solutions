class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.sum = 0;
  }

  part_one() {
    this.sumObj(this.infos);
    return this.sum;
  }

  sumArr(arr) {
    process.stdout.write("Entering array: ");
    console.log(arr);
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        this.sumArr(elem);
      } else if (typeof elem === "object" && elem !== null) {
        this.sumObj(elem);
      } else if (typeof elem === "number") {
        this.sum += elem;
        console.log(`Adding ${elem}, new sum : ${this.sum}`);
      }
    }
  }

  sumObj(obj) {
    process.stdout.write("Entering object: ");
    console.log(obj);
    for (let key of Object.keys(obj)) {
      if (Array.isArray(obj[key])) {
        this.sumArr(obj[key]);
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        this.sumObj(obj[key]);
      } else if (typeof obj[key] === "number") {
        this.sum += obj[key];
        console.log(`Adding ${obj[key]}, new sum : ${this.sum}`);
      }
    }
  }

  part_two() {
    this.sumObjWithoutRed(this.infos);
    return this.sum;
  }

  sumObjWithoutRed(obj) {
    process.stdout.write("Entering object: ");
    console.log(obj);
    if (Object.values(obj).every((elem) => elem !== "red")) {
      for (let key of Object.keys(obj)) {
        if (Array.isArray(obj[key])) {
          this.sumArrWithoutRed(obj[key]);
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          this.sumObjWithoutRed(obj[key]);
        } else if (typeof obj[key] === "number") {
          this.sum += obj[key];
          console.log(`Adding ${obj[key]}, new sum : ${this.sum}`);
        }
      }
    } else {
      console.log(
        "Leaving object without adding anything since it contains red"
      );
    }
  }

  sumArrWithoutRed(arr) {
    process.stdout.write("Entering array: ");
    console.log(arr);
    for (let elem of arr) {
      if (Array.isArray(elem)) {
        this.sumArrWithoutRed(elem);
      } else if (typeof elem === "object" && elem !== null) {
        this.sumObjWithoutRed(elem);
      } else if (typeof elem === "number") {
        this.sum += elem;
        console.log(`Adding ${elem}, new sum : ${this.sum}`);
      }
    }
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `R 4
    U 4
    L 3
    D 1
    R 4
    D 1
    L 5
    R 2`.split("\n").map((elem) => elem.trim()),
    part_one: 13,
    part_two: undefined,
  },
  {
    input: `R 5
    U 8
    L 8
    D 3
    R 17
    D 10
    L 25
    U 20`.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: 36,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `+1
    +1
    +1`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 3,
    part_two: undefined,
  },
  {
    input: `+1
    +1
    -2`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 0,
    part_two: undefined,
  },
  {
    input: `-1
    -2
    -3`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: -6,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

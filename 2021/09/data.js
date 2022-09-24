const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `2199943210
    3987894921
    9856789892
    8767896789
    9899965678`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 15,
    part_two: 1134,
  }
];

module.exports = {
  input,
  sampleInputs,
};

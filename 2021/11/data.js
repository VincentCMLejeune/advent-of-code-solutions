const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `5483143223
    2745854711
    5264556173
    6141336146
    6357385478
    4167524645
    2176841721
    6882881134
    4846848554
    5283751526`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 1656,
    part_two: 195,
  },
];

module.exports = {
  input,
  sampleInputs,
};

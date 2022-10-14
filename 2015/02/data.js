const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `2x3x4`.split("\n").map((elem) => elem.trim()),
    part_one: 58,
    part_two: undefined,
  },
  {
    input: `1x1x10`.split("\n").map((elem) => elem.trim()),
    part_one: 43,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

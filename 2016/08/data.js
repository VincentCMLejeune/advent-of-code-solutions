const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `rect 3x2
    rotate column x=1 by 1
    rotate row y=0 by 4
    rotate column x=1 by 1`.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: undefined,
  },
  {
    input: ``.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

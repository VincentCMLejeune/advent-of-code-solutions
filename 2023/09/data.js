const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `0 3 6 9 12 15
    1 3 6 10 15 21
    10 13 16 21 30 45`.split("\n").map((elem) => elem.trim()),
    part_one: 114,
    part_two: 2,
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

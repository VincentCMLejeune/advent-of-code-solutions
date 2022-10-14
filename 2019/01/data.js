const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `12
    14
    1969
    100756`.split("\n").map((elem) => elem.trim()),
    part_one: 34241,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `#1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2`.split("\n").map((elem) => elem.trim()),
    part_one: 4,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `5 1 9 5
    7 5 3
    2 4 6 8`.split("\n").map((elem) => elem.trim()),
    part_one: 18,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

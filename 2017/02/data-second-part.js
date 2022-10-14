const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `5 9 2 8
    9 4 7 3
    3 8 6 5`
      .split("\n")
      .map((elem) => elem.trim()),
    part_two: 9,
  },
];

module.exports = {
  input,
  sampleInputs,
};

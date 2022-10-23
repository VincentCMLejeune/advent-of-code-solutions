const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `1, 1
    1, 6
    8, 3
    3, 4
    5, 5
    8, 9`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 17,
    part_two: 16,
  },
];

module.exports = {
  input,
  sampleInputs,
};

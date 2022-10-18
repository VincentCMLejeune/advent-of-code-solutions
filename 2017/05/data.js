const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `0
    3
    0
    1
    -3`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 5,
    part_two: 10,
  },
];

module.exports = {
  input,
  sampleInputs,
};

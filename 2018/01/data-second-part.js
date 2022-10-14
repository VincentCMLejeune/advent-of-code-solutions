const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `+1
    -1`
      .split("\n")
      .map((elem) => elem.trim()),
    part_two: 0,
  },
  {
    input: `+3
    +3
    +4
    -2
    -4`
      .split("\n")
      .map((elem) => elem.trim()),
    part_two: 10,
  },
  {
    input: `-6
    +3
    +8
    +5
    -6`
      .split("\n")
      .map((elem) => elem.trim()),
    part_two: 5,
  },
  {
    input: `+7
    +7
    -2
    -7
    -4`
      .split("\n")
      .map((elem) => elem.trim()),
    part_two: 14,
  },
];

module.exports = {
  input,
  sampleInputs,
};

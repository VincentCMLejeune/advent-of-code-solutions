const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `ULL
    RRDDD
    LURDL
    UUUUD`.split("\n").map((elem) => elem.trim()),
    part_one: 1985,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

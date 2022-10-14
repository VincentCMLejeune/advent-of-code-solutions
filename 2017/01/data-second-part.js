const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `1212`.split("\n").map((elem) => elem.trim()),
    part_two: 6,
  },
  {
    input: `1221`.split("\n").map((elem) => elem.trim()),
    part_two: 0,
  },
  {
    input: `123425`.split("\n").map((elem) => elem.trim()),
    part_two: 4,
  },
  {
    input: `123123`.split("\n").map((elem) => elem.trim()),
    part_two: 12,
  },
  {
    input: `12131415`.split("\n").map((elem) => elem.trim()),
    part_two: 4,
  },
];

module.exports = {
  input,
  sampleInputs,
};

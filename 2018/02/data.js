const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `abcdef
    bababc
    abbcde
    abcccd
    aabcdd
    abcdee
    ababab`.split("\n").map((elem) => elem.trim()),
    part_one: 12,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

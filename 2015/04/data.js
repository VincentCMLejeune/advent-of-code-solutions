const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `abcdef`,
    part_one: 609043,
    part_two: undefined,
  },
  {
    input: `pqrstuv`,
    part_one: 1048970,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `abcdef`,
    part_one: 609043,
  },
  {
    input: `pqrstuv`,
    part_one: 1048970,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `1`,
    part_one: 0,
    part_two: undefined,
  },
  {
    input: `12`,
    part_one: 3,
    part_two: undefined,
  },
  {
    input: `23`,
    part_one: 2,
    part_two: undefined,
  },
  {
    input: `1024`,
    part_one: 31,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

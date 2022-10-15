const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `1`,
    part_one: 0,
  },
  {
    input: `12`,
    part_one: 3,
  },
  {
    input: `23`,
    part_one: 2,
  },
  {
    input: `1024`,
    part_one: 31,
  },
];

module.exports = {
  input,
  sampleInputs,
};

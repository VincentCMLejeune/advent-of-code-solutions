const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim();

const sampleInputs = [
  {
    input: `R2, L3`,
    part_one: 5,
    part_two: undefined,
  },
  {
    input: `R2, R2, R2`,
    part_one: 2,
    part_two: undefined,
  },
  {
    input: `R5, L5, R5, R3`,
    part_one: 12,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()

const sampleInputs = [
  {
    input: `^v`,
    part_one: 2,
    part_two: undefined,
  },
  {
    input: `^>v<`,
    part_one: 4,
    part_two: undefined,
  },
  {
    input: `^v^v^v^v^v`,
    part_one: 2,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

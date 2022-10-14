const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `1122`.split("\n").map((elem) => elem.trim()),
    part_one: 3,
    part_two: undefined,
  },
  {
    input: `1111`.split("\n").map((elem) => elem.trim()),
    part_one: 4,
    part_two: undefined,
  },
  {
    input: `1234`.split("\n").map((elem) => elem.trim()),
    part_one: 0,
    part_two: undefined,
  },
  {
    input: `91212129`.split("\n").map((elem) => elem.trim()),
    part_one: 9,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

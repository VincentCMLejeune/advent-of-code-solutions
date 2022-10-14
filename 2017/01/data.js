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
  },
  {
    input: `1111`.split("\n").map((elem) => elem.trim()),
    part_one: 4,
  },
  {
    input: `1234`.split("\n").map((elem) => elem.trim()),
    part_one: 0,
  },
  {
    input: `91212129`.split("\n").map((elem) => elem.trim()),
    part_one: 9,
  },
];

module.exports = {
  input,
  sampleInputs,
};

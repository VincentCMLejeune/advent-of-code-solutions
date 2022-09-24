const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `16,1,2,0,4,2,7,1,2,14`.split("\n").map((elem) => elem.trim()),
    part_one: 37,
    part_two: 168,
  },
];

module.exports = {
  input,
  sampleInputs,
};

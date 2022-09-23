const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `3,4,3,1,2`.split("\n").map((elem) => elem.trim()),
    partOne: 5934,
    partTwo: 26984457539,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim();

const sampleInputs = [
  {
    input: `R8, R4, R4, R8`,
    part_two: 4,
  },
];

module.exports = {
  input,
  sampleInputs,
};

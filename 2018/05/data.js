const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `dabAcCaCBAcCcaDA`,
    part_one: 10,
    part_two: 4,
  },
];

module.exports = {
  input,
  sampleInputs,
};

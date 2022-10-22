const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: "0 2 7 0",
    part_one: 5,
    part_two: 4,
  },
];

module.exports = {
  input,
  sampleInputs,
};

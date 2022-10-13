const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `1721
    979
    366
    299
    675
    1456`.split("\n").map((elem) => elem.trim()),
    part_one: 514579,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

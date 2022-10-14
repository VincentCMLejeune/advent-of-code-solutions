const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `1-3 a: abcde
    1-3 b: cdefg
    2-9 c: ccccccccc`.split("\n").map((elem) => elem.trim()),
    part_one: 2,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `b inc 5 if a > 1
    a inc 1 if b < 5
    c dec -10 if a >= 1
    c inc -20 if c == 10`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 1,
    part_two: 10,
  },
];

module.exports = {
  input,
  sampleInputs,
};

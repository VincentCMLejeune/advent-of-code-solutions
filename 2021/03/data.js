const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `00100
		11110
		10110
		10111
		10101
		01111
		00111
		11100
		10000
		11001
		00010
		01010`
      .split("\n")
      .map((elem) => elem.trim()),
    partOne: 198,
    partTwo: 230,
  },
];

module.exports = {
  input,
  sampleInputs,
};

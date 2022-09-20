const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `199
		200
		208
		210
		200
		207
		240
		269
		260
		263`
      .split("\n")
      .map((elem) => elem.trim()),
    partOne: 7,
    partTwo: 5,
  }
];

module.exports = {
  input,
  sampleInputs,
};

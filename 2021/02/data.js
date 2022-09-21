const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `forward 5
		down 5
		forward 8
		up 3
		down 8
		forward 2`
      .split("\n")
      .map((elem) => elem.trim()),
    partOne: 150,
    partTwo: 900,
  }
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `aa bb cc dd ee
    aa bb cc dd aa
    aa bb cc dd aaa`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 2,
  },
  {
    input: `abcde fghij
    abcde xyz ecdab
    a ab abc abd abf abj
    iiii oiii ooii oooi oooo
    oiii ioii iioi iiio`
      .split("\n")
      .map((elem) => elem.trim()),
    part_two: 3,
  },
];

module.exports = {
  input,
  sampleInputs,
};

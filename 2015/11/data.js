const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `abcdefgh`,
    part_one: "abcdffaa",
    part_two: undefined,
  },
  {
    input: `ghijklmn`,
    part_one: "ghjaabcc",
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

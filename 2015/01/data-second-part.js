const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `)`,
    part_two: 1,
  },
  {
    input: `()())`,
    part_two: 5,
  },
];

module.exports = {
  input,
  sampleInputs,
};

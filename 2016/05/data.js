const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `abc`,
    part_one: "18f47a30",
    part_two: undefined,
  },
  {
    input: ``,
    part_one: undefined,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

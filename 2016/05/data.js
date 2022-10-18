const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `abc`,
    part_one: "18f47a30",
    part_two: "05ace8e3",
  },
];

module.exports = {
  input,
  sampleInputs,
};

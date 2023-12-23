const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `H => HO
    H => OH
    O => HH
    
    HOH`.split("\n").map((elem) => elem.trim()),
    part_one: 4,
    part_two: undefined,
  },
  {
    input: `H => HO
    H => OH
    O => HH
    
    HOHOHO`.split("\n").map((elem) => elem.trim()),
    part_one: 7,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

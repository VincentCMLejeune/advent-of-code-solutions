const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `abc

    a
    b
    c
    
    ab
    ac
    
    a
    a
    a
    a
    
    b`.split("\n").map((elem) => elem.trim()),
    part_one: 11,
    part_two: 6,
  },
];

module.exports = {
  input,
  sampleInputs,
};

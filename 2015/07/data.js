const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `123 -> x
    x AND y -> d
    x OR y -> e
    x LSHIFT 2 -> f
    y RSHIFT 2 -> g
    456 -> y
    NOT x -> h
    NOT y -> i`.split("\n").map((elem) => elem.trim()),
    part_one: true,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

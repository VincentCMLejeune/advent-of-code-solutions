const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `.#.#.#
    ...##.
    #....#
    ..#...
    #.#..#
    ####..`.split("\n").map((elem) => elem.trim()),
    part_one: 4,
    part_two: undefined,
  },
  {
    input: `##.#.#
    ...##.
    #....#
    ..#...
    #.#..#
    ####.#`.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: 17,
  },
];

module.exports = {
  input,
  sampleInputs,
};

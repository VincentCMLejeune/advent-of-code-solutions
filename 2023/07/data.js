const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `32T3K 765
    T55J5 684
    KK677 28
    KTJJT 220
    QQQJA 483`.split("\n").map((elem) => elem.trim()),
    part_one: 6440,
    part_two: undefined,
  },
  {
    input: ``.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

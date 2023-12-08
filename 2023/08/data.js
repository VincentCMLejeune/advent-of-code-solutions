const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `RL

    AAA = (BBB, CCC)
    BBB = (DDD, EEE)
    CCC = (ZZZ, GGG)
    DDD = (DDD, DDD)
    EEE = (EEE, EEE)
    GGG = (GGG, GGG)
    ZZZ = (ZZZ, ZZZ)`.split("\n").map((elem) => elem.trim()),
    part_one: 2,
    part_two: undefined,
  },
  {
    input: `LLR

    AAA = (BBB, BBB)
    BBB = (AAA, ZZZ)
    ZZZ = (ZZZ, ZZZ)`.split("\n").map((elem) => elem.trim()),
    part_one: 6,
    part_two: undefined,
  },
  {
    input: `LLR

    AAA = (BBB, BBB)
    BBB = (AAA, ZZZ)
    ZZZ = (ZZZ, ZZZ)`.split("\n").map((elem) => elem.trim()),
    part_one: 6,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

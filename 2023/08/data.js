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
    input: `LR

    11A = (11B, XXX)
    11B = (XXX, 11Z)
    11Z = (11B, XXX)
    22A = (22B, XXX)
    22B = (22C, 22C)
    22C = (22Z, 22Z)
    22Z = (22B, 22B)
    XXX = (XXX, XXX)`.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: 6,
  },
];

module.exports = {
  input,
  sampleInputs,
};

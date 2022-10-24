const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `COM)B
    B)C
    C)D
    D)E
    E)F
    B)G
    G)H
    D)I
    E)J
    J)K
    K)L`.split("\n").map((elem) => elem.trim()),
    part_one: 42,
    part_two: undefined,
  },
  {
    input: `COM)B
    B)C
    C)D
    D)E
    E)F
    B)G
    G)H
    D)I
    E)J
    J)K
    K)L
    K)YOU
    I)SAN`.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: 4,
  },
];

module.exports = {
  input,
  sampleInputs,
};

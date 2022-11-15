const path = require("path");
const fs = require("fs");

const input = require("./input.json");

const sampleInputs = [
  {
    input: {
      a: [1, 2, 3],
      b: { a: 2, b: 4 },
      c: [[[3]]],
      d: { a: { b: 4 }, c: -1 },
      e: { a: [-1, 1] },
      f: [-1, { a: 1 }],
    },
    part_one: 18,
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

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
    input: {
      a: [1, 2, 3],
      b: [1, { c: "red", b: 2 }, 3],
      c: { d: "red", e: [1, 2, 3, 4], f: 5 },
      d: [1, "red", 5],
    },
    part_one: undefined,
    part_two: 16,
  },
];

module.exports = {
  input,
  sampleInputs,
};

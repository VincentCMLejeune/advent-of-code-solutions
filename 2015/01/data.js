const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `(())`,
    part_one: 0,
  },
  {
    input: `()()`,
    part_one: 0,
  },
  {
    input: `(((`,
    part_one: 3,
  },
  {
    input: `(()(()(`,
    part_one: 3,
  },
  {
    input: `))(((((`,
    part_one: 3,
  },
  {
    input: `())`,
    part_one: -1,
  },
  {
    input: `))(`,
    part_one: -1,
  },
  {
    input: `)))`,
    part_one: -3,
  },
  {
    input: `)())())`,
    part_one: -3,
  },
];

module.exports = {
  input,
  sampleInputs,
};

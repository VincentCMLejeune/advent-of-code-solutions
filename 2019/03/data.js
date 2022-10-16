const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `R8,U5,L5,D3
    U7,R6,D4,L4`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 6,
    part_two: 30,
  },
  {
    input: `R75,D30,R83,U83,L12,D49,R71,U7,L72
    U62,R66,U55,R34,D71,R55,D58,R83`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 159,
    part_two: 610,
  },
  {
    input: `R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
    U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`
      .split("\n")
      .map((elem) => elem.trim()),
    part_one: 135,
    part_two: 410,
  },
];

module.exports = {
  input,
  sampleInputs,
};

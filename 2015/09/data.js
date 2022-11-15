const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `London to Dublin = 464
    London to Belfast = 518
    Dublin to Belfast = 141`.split("\n").map((elem) => elem.trim()),
    part_one: 605,
    part_two: 982,
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

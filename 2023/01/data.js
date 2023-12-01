const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `1abc2
    pqr3stu8vwx
    a1b2c3d4e5f
    treb7uchet`.split("\n").map((elem) => elem.trim()),
    part_one: 142,
    part_two: undefined,
  },
  {
    input: `two1nine
    eightwothree
    abcone2threexyz
    xtwone3four
    4nineeightseven2
    zoneight234
    7pqrstsixteen`.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: 281,
  },
];

module.exports = {
  input,
  sampleInputs,
};

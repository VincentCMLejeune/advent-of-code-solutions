const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `ugknbfddgicrmopn
    aaa
    jchzalrnumimnmhp
    haegwjzuvuyypxyu
    dvszwmarrgswjxmb`.split("\n").map((elem) => elem.trim()),
    part_one: 2,
    part_two: undefined,
  },
  {
    input: `qjhvhtzxzqqjkmpb
    xxyxx
    uurcxstgmygtbstg
    ieodomkazucvgmuy`.split("\n").map((elem) => elem.trim()),
    part_one: undefined,
    part_two: 2,
  },
];

module.exports = {
  input,
  sampleInputs,
};

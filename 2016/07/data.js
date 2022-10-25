const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `abba[mnop]qrst
    abcd[bddb]xyyx
    aaaa[qwer]tyui
    ioxxoj[asdfgh]zxcvbn`.split("\n").map((elem) => elem.trim()),
    part_one: 2,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `abcde
    fghij
    klmno
    pqrst
    fguij
    axcye
    wvxyz`.split("\n").map((elem) => elem.trim()),
    part_two: 'fgij',
  },
];

module.exports = {
  input,
  sampleInputs,
};

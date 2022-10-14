const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()

const sampleInputs = [
  {
    input: `1,9,10,3,2,3,11,0,99,30,40,50`,
    part_one: 3500,
  },
];

module.exports = {
  input,
  sampleInputs,
};

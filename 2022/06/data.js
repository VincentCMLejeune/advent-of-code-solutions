const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
    part_one: 7,
    part_two: 19,
  },
  {
    input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
    part_one: 5,
    part_two: 23,
  },
  {
    input: `nppdvjthqldpwncqszvftbrmjlhg`,
    part_one: 6,
    part_two: 23,
  },
  {
    input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
    part_one: 10,
    part_two: 29,
  },
  {
    input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
    part_one: 11,
    part_two: 26,
  },
];

module.exports = {
  input,
  sampleInputs,
};

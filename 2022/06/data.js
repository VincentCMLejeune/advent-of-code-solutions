const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString();

const sampleInputs = [
  {
    input: `mjqjpqmgbljsphdztnvjfqwrcgsmlb`,
    part_one: 7,
    part_two: undefined,
  },
  {
    input: `bvwbjplbgvbhsrlpgdmjqwftvncz`,
    part_one: 5,
    part_two: undefined,
  },
  {
    input: `nppdvjthqldpwncqszvftbrmjlhg`,
    part_one: 6,
    part_two: undefined,
  },
  {
    input: `nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg`,
    part_one: 10,
    part_two: undefined,
  },
  {
    input: `zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw`,
    part_one: 11,
    part_two: undefined,
  },
];

module.exports = {
  input,
  sampleInputs,
};

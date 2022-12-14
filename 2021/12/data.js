const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `start-A
    start-b
    A-c
    A-b
    b-d
    A-end
    b-end`.split("\n").map((elem) => elem.trim()),
    part_one: 10,
    part_two: 36,
  },
  {
    input: `dc-end
    HN-start
    start-kj
    dc-start
    dc-HN
    LN-dc
    HN-end
    kj-sa
    kj-HN
    kj-dc`.split("\n").map((elem) => elem.trim()),
    part_one: 19,
    part_two: 103,
  },
  {
    input: `fs-end
    he-DX
    fs-he
    start-DX
    pj-DX
    end-zg
    zg-sl
    zg-pj
    pj-he
    RW-he
    fs-DX
    pj-RW
    zg-RW
    start-pj
    he-WI
    zg-he
    pj-fs
    start-RW`.split("\n").map((elem) => elem.trim()),
    part_one: 226,
    part_two: 3509,
  },
];

module.exports = {
  input,
  sampleInputs,
};

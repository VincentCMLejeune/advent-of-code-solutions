const path = require("path");
const fs = require("fs");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

const sampleInputs = [
  {
    input: `$ ls
    dir a
    14848514 b.txt
    8504156 c.dat
    dir d
    $ cd a
    $ ls
    dir e
    29116 f
    2557 g
    62596 h.lst
    $ cd e
    $ ls
    584 i
    $ cd ..
    $ cd ..
    $ cd d
    $ ls
    4060174 j
    8033020 d.log
    5626152 d.ext
    7214296 k`.split("\n").map((elem) => elem.trim()),
    part_one: 95437,
    part_two: 24933642,
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

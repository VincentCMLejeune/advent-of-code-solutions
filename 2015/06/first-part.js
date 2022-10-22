const { input } = require("./data");
const AdventOfCode = require("./index");

let instance = new AdventOfCode(input);
let res = instance.part_one();
console.log(`Part one answer: ${res}`);

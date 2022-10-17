const { input } = require("./data");
const AdventOfCode = require("./index");

let instance = new AdventOfCode(input);
let res = instance.part_two();
console.log(`Part two answer: ${res}`);

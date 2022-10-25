const { input } = require("./data");
const AdventOfCode = require("./index");

let instanceA = new AdventOfCode(input);
let valueA = instanceA.part_one();
console.log(valueA)
let instance = new AdventOfCode(input);
let res = instance.part_two(valueA);
console.log(`Part two answer: ${res}`);

const assert = require("assert");
const { input, sampleInputs } = require("./data-second-part");
const AdventOfCode = require("./index");

for (let i = 0 ; i < sampleInputs.length ; i++) {
  let sample_instance = new AdventOfCode(sampleInputs[i].input);
  let sample_part_two = sample_instance.part_two();
  assert.strictEqual(sample_part_two, sampleInputs[i].part_two);
  console.log(`Test ${i + 1} successful`);
}

let instance = new AdventOfCode(input);
let res = instance.part_two();
console.log(`Part two answer: ${res}`);

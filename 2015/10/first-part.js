const assert = require("assert");
const { input, sampleInputs } = require("./data");
const AdventOfCode = require("./index");

let testNum = 1;
for (let i = 0; i < sampleInputs.length; i++) {
  if (sampleInputs[i].part_one !== undefined) {
    let sample_instance = new AdventOfCode(sampleInputs[i].input);
    let sample_part_one = sample_instance.part_one(5);
    assert.strictEqual(sample_part_one, sampleInputs[i].part_one);
    console.log(`Test ${testNum} successful`);
    testNum++;
  }
}

let instance = new AdventOfCode(input);
let res = instance.part_one(40);
console.log(`Part one answer: ${res}`);

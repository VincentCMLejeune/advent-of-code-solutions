const assert = require("assert");
const { input, sampleInputs } = require("./data");
const AdventOfCode = require("./index");

let testNum = 1;
for (let i = 0; i < sampleInputs.length; i++) {
  if (sampleInputs[i].part_one !== undefined) {
    const before = Date.now();
    let sample_instance = new AdventOfCode(sampleInputs[i].input);
    let sample_part_one = sample_instance.part_one();
    const after = Date.now();
    assert.strictEqual(sample_part_one, sampleInputs[i].part_one);
    console.log(`Test ${testNum} successful in ${after - before}ms`);
    testNum++;
  }
}

const before = Date.now();
let instance = new AdventOfCode(input);
let res = instance.part_one();
const after = Date.now();
console.log(`Part one answer: ${res} (${after - before}ms)`);

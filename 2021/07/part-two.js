const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Crab = require("./crab");

for (let sampleInput of sampleInputs) {
  let sample_crab = new Crab(sampleInput.input);
  let sample_part_two = sample_crab.part_two();
  assert.strictEqual(sample_part_two, sampleInput.part_two);
}

let crab = new Crab(input);
let res = crab.part_two();
console.log(res);

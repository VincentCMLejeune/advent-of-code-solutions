const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Crab = require("./crab");

for (let sampleInput of sampleInputs) {
  let sample_crab = new Crab(sampleInput.input);
  let sample_part_one = sample_crab.part_one();
  assert.strictEqual(sample_part_one, sampleInput.part_one);
}

let crab = new Crab(input);
let res = crab.part_one();
console.log(res);

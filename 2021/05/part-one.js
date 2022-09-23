const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Vent = require("./vent");

for (let sampleInput of sampleInputs) {
  let sample_vent = new Vent(sampleInput.input);
  let sample_part_one = sample_vent.partOne();
  assert.strictEqual(sample_part_one, sampleInput.partOne);
}

let vent = new Vent(input);
let res = vent.partOne();
console.log(res);

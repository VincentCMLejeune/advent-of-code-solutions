const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Vent = require("./vent");

for (let sampleInput of sampleInputs) {
  let sample_vent = new Vent(sampleInput.input);
  let sample_part_two = sample_vent.partTwo();
  assert.strictEqual(sample_part_two, sampleInput.partTwo);
}

let vent = new Vent(input);
let res = vent.partTwo();
console.log(res);

const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Lava = require("./lava");

for (let sampleInput of sampleInputs) {
  let sample_lava = new Lava(sampleInput.input);
  let sample_part_two = sample_lava.part_two();
  assert.strictEqual(sample_part_two, sampleInput.part_two);
}

let lava = new Lava(input);
let res = lava.part_two();
console.log(res);

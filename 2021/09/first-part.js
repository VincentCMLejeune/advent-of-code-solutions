const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Lava = require("./lava");

for (let sampleInput of sampleInputs) {
  let sample_lava = new Lava(sampleInput.input);
  let sample_part_one = sample_lava.part_one();
  assert.strictEqual(sample_part_one, sampleInput.part_one);
}

let lava = new Lava(input);
let res = lava.part_one();
console.log(res);

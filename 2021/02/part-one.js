const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Submarine = require("./submarine");

for (let sampleInput of sampleInputs) {
  let sample_submarine = new Submarine(sampleInput.input);
  let sample_part_one = sample_submarine.navigate();
  assert.strictEqual(sample_part_one, sampleInput.partOne);
}

let submarine = new Submarine(input);
let res = submarine.navigate();
console.log(res);

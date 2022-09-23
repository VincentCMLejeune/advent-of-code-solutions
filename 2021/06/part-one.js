const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Fish = require("./fish");

for (let sampleInput of sampleInputs) {
  let sample_fish = new Fish(sampleInput.input);
  let sample_part_one = sample_fish.partOne();
  assert.strictEqual(sample_part_one, sampleInput.partOne);
}

let fish = new Fish(input);
let res = fish.partOne();
console.log(res);

const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Fish = require("./fish");

for (let sampleInput of sampleInputs) {
  let sample_fish = new Fish(sampleInput.input);
  let sample_part_two = sample_fish.partTwo();
  assert.strictEqual(sample_part_two, sampleInput.partTwo);
}

let fish = new Fish(input);
let res = fish.partTwo();
console.log(res);

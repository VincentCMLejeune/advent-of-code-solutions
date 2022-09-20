const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Submarine = require("./submarine");

for (let sampleInput of sampleInputs) {
  let sample_submarine = new Submarine(sampleInput.input);
  let sample_part_two = sample_submarine.checkIncreasedDeapthsByThree();
  assert.strictEqual(sample_part_two, sampleInput.partTwo);
}

let submarine = new Submarine(input);
let res = submarine.checkIncreasedDeapthsByThree();
console.log(res);

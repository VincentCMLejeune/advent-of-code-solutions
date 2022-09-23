const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Bingo = require("./bingo");

for (let sampleInput of sampleInputs) {
  let sample_bingo = new Bingo(sampleInput.input);
  let sample_part_two = sample_bingo.partTwoScore();
  assert.strictEqual(sample_part_two, sampleInput.partTwo);
}

let bingo = new Bingo(input);
let res = bingo.partTwoScore();
console.log(res);

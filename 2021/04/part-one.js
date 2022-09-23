const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Bingo = require("./bingo");

for (let sampleInput of sampleInputs) {
  let sample_bingo = new Bingo(sampleInput.input);
  let sample_part_one = sample_bingo.partOneScore();
  assert.strictEqual(sample_part_one, sampleInput.partOne);
}

let bingo = new Bingo(input);
let res = bingo.partOneScore();
console.log(res);

const assert = require("assert");
const { input, sampleInputs } = require("./data");
const AdventOfCode = require("./index");

for (let sampleInput of sampleInputs) {
  let sample_game = new AdventOfCode(sampleInput.input);
  let sample_part_one = sample_game.part_one();
  assert.strictEqual(sample_part_one, sampleInput.part_one);
}

let game = new AdventOfCode(input);
let res = game.part_one();
console.log(res);

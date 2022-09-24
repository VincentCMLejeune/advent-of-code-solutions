const assert = require("assert");
const { input, sampleInputs } = require("./data");
const AdventOfCode = require("./index");

for (let sampleInput of sampleInputs) {
  let sample_game = new AdventOfCode(sampleInput.input);
  let sample_part_two = sample_game.part_two();
  assert.strictEqual(sample_part_two, sampleInput.part_two);
}

let game = new AdventOfCode(input);
let res = game.part_two();
console.log(res);

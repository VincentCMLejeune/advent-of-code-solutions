const assert = require("assert");
const { input, sampleInputs } = require("./data");
const AdventOfCode = require("./index");

for (let i = 0 ; i < sampleInputs.length ; i++) {
  let sample_game = new AdventOfCode(sampleInputs[i].input);
  let sample_part_one = sample_game.foldOnce();
  assert.strictEqual(sample_part_one, sampleInputs[i].part_one);
  console.log(`Test ${i + 1} successful`);
}

let game = new AdventOfCode(input);
let res = game.foldOnce();
console.log(`Part one answer: ${res}`);

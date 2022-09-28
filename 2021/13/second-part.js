const assert = require("assert");
const { input, sampleInputs } = require("./data");
const AdventOfCode = require("./index");

for (let i = 0 ; i < sampleInputs.length ; i++) {
  let sample_game = new AdventOfCode(sampleInputs[i].input);
  let sample_part_two = sample_game.part_two();
  assert.strictEqual(sample_part_two, sampleInputs[i].part_two);
  console.log(`Test ${i + 1} successful`);
}

let game = new AdventOfCode(input);
let res = game.part_two();
console.log(`Part two answer: ${res}`);

const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Game = require("./game");

for (let sampleInput of sampleInputs) {
  let sample_game = new Game(sampleInput.input);
  let sample_part_two = sample_game.part_two();
  assert.strictEqual(sample_part_two, sampleInput.part_two);
}

let game = new Game(input);
let res = game.part_two();
console.log(res);

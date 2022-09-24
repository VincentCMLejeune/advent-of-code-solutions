const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Game = require("./game");

for (let sampleInput of sampleInputs) {
  let sample_game = new Game(sampleInput.input);
  let sample_part_one = sample_game.part_one();
  assert.strictEqual(sample_part_one, sampleInput.part_one);
}

let game = new Game(input);
let res = game.part_one();
console.log(res);

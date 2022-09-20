const assert = require("assert");
const { input, sampleInputs } = require("./data");
const Game = require("./game");

for (let sampleInput of sampleInputs) {
  let sample_game = new Game(sampleInput.input);
  let sample_part_one = sample_game.customMethod();
  if (sampleInput.partOne !== undefined) {
    assert.strictEqual(sample_part_one, sampleInput.partOne);
  }
}

let game = new Game(input);
let res = game.customMethod();
console.log(res);

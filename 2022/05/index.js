class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.stacks = this.infos[0];
    this.moves = this.infos[1];
  }

  part_one() {
    for (let move of this.moves) {
      this.moveStack(move);
    }
    return this.getTopLetters();
  }

  getTopLetters() {
    const result = [];
    Object.values(this.stacks).forEach((arr) =>
      result.push(arr[arr.length - 1])
    );
    return result.join("");
  }

  moveStack(move) {
    for (let i = 0; i < move.quantity; i++) {
      const item_to_move = this.stacks[move.from].pop();
      this.stacks[move.to].push(item_to_move);
    }
  }

  part_two() {
    for (let move of this.moves) {
      this.moveStackTogether(move);
    }
    return this.getTopLetters();
  }

  moveStackTogether(move) {
    let items_to_move = [];
    for (let i = 0; i < move.quantity; i++) {
      const item_to_add = this.stacks[move.from].pop();
      items_to_move.unshift(item_to_add);
    }
    for (let item of items_to_move) {
      this.stacks[move.to].push(item);
    }
  }

  parseInfos(raw_data) {
    const stacks = {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
    };
    const moves = [];
    const separator = raw_data.indexOf("");
    const raw_stacks = raw_data.slice(0, separator - 1);
    const raw_moves = raw_data.slice(separator + 1);
    for (let line of raw_stacks) {
      for (let i = 0; i < line.length; i += 4) {
        const idx = i + 1;
        if (line[idx] !== " ") {
          const idx_to_add = Math.ceil(idx / 4);
          stacks[idx_to_add].unshift(line[idx]);
        }
      }
    }
    for (let line of raw_moves) {
      line = line.split(" ");
      moves.push({ quantity: Number(line[1]), from: line[3], to: line[5] });
    }
    return [stacks, moves];
  }
}

module.exports = AdventOfCode;

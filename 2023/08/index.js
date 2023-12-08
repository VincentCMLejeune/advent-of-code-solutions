class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.instructions = this.infos.instructions;
    this.nodes = this.infos.nodes;
  }

  part_one() {
    let steps = 0;
    let current_node = "AAA";
    while (current_node !== "ZZZ") {
      let i = steps % this.instructions.length;
      let current_instruction = this.instructions[i];
      current_node = this.nodes[current_node][current_instruction];
      steps++;
    }
    return steps;
  }

  part_two() {
    let current_nodes = [];
    for (let node of Object.keys(this.nodes)) {
      if (node[2] === "A") {
        current_nodes.push(node);
      }
    }
    let steps_required_per_node = [];
    for (let node of current_nodes) {
      steps_required_per_node.push(this.getStepsRequired(node));
    }
    return this.ppcmArray(steps_required_per_node);
  }

  getStepsRequired(node) {
    let steps = 0;
    let current_node = node;
    while (current_node[2] !== "Z") {
      let i = steps % this.instructions.length;
      let current_instruction = this.instructions[i];
      current_node = this.nodes[current_node][current_instruction];
      steps++;
    }
    return steps;
  }

  pgcd(a, b) {
    return b === 0 ? a : this.pgcd(b, a % b);
  }
  ppcm(a, b) {
    return (a * b) / this.pgcd(a, b);
  }
  ppcmArray(numbers) {
    if (numbers.length < 2) {
      throw new Error("At least two numbers required");
    }
    let result = this.ppcm(numbers[0], numbers[1]);
    for (let i = 2; i < numbers.length; i++) {
      result = this.ppcm(result, numbers[i]);
    }
    return result;
  }

  parseInfos(raw_data) {
    let parsedData = {
      nodes: {},
    };
    parsedData.instructions = raw_data[0].split("");
    for (let i = 2; i < raw_data.length; i++) {
      let row = raw_data[i].split(" = ");
      let right_part = row[1].split(", ");
      parsedData.nodes[row[0]] = {
        L: right_part[0].substring(1),
        R: right_part[1].substring(0, 3),
      };
    }
    return parsedData;
  }
}

module.exports = AdventOfCode;

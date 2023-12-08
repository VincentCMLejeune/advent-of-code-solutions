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
    return true;
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

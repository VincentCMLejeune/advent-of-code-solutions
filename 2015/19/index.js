class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.machine = this.infos.machine;
    this.molecule = this.infos.molecule;
  }

  part_one() {
    let possible_molecules = [];
    for (let part of Object.keys(this.machine)) {
      let splitted_molecule = this.molecule.split(part);
      if (splitted_molecule.length > 1) {
        for (let i = 1; i < splitted_molecule.length; i++) {
          for (let replacement of this.machine[part]) {
            let part_one = splitted_molecule.slice(0, i).join(part);
            let part_two = splitted_molecule.slice(i).join(part);
            let new_molecule = part_one + replacement + part_two;
            if (possible_molecules.indexOf(new_molecule) === -1) {
              possible_molecules.push(new_molecule);
            }
          }
        }
      }
    }
    return possible_molecules.length;
  }

  part_two() {
    return true;
  }

  parseInfos(raw_data) {
    let parsed_data = {
      machine: {},
      molecule: "$" + raw_data[raw_data.length - 1] + "$",
    };
    for (let i = 0; i < raw_data.length - 2; i++) {
      let row = raw_data[i].split(" => ");
      if (parsed_data.machine[row[0]]) {
        parsed_data.machine[row[0]].push(row[1]);
      } else {
        parsed_data.machine[row[0]] = [row[1]];
      }
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

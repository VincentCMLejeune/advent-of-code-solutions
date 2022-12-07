class AdventOfCode {
  constructor(raw_data) {
    this.instructions = this.parseInfos(raw_data);
    this.fs = { "/": { files: [] } };
    this.current_path = ["/"];
    this.directories = [{ name: "/", path: ["/"] }];
  }

  part_one() {
    let res = 0;
    while (this.instructions.length !== 0) {
      let instruction = this.instructions.shift();
      if (instruction === "$ ls") {
        this.listFiles();
      } else {
        this.changeDirectory(instruction);
      }
    }
    this.printTree();
    for (let dir of this.directories) {
      let size = this.getSize(dir.path);
      if (size <= 100000) res += size;
    }
    return res;
  }

  getSize(path) {
    let tree = this.fs;
    for (let elem of path) {
      tree = tree[elem];
    }
    let size = 0;
    let subFolders = [];
    for (let elem of Object.keys(tree)) {
      if (elem === "files") {
        for (let file of tree[elem]) {
          size += file.size;
        }
      } else {
        size += this.getSize([...path, elem]);
      }
    }
    return size;
  }

  printTree(path = ["/"]) {
    let tree = this.fs;
    let name = path[path.length - 1];
    for (let elem of path) {
      tree = tree[elem];
    }
    for (let elem of Object.keys(tree).filter((item) => item !== "files")) {
      this.directories.push({ name: elem, path: [...path, elem] });
      this.printTree([...path, elem]);
    }
  }

  changeDirectory(instruction) {
    instruction = instruction.split(" ");
    if (instruction[2] === "..") {
      this.current_path.pop();
    } else {
      this.current_path.push(instruction[2]);
    }
  }

  listFiles() {
    while (this.instructions.length !== 0 && this.instructions[0][0] !== "$") {
      let newElement = this.instructions.shift();
      newElement = newElement.split(" ");
      if (newElement[0] === "dir") {
        this.addDirToPath(newElement[1]);
      } else {
        this.addFileToPath({
          name: newElement[1],
          size: Number(newElement[0]),
        });
      }
    }
  }

  addFileToPath(file) {
    let path = this.fs;
    for (let elem of this.current_path) {
      path = path[elem];
    }
    path.files.push(file);
  }

  addDirToPath(dirName) {
    let path = this.fs;
    for (let elem of this.current_path) {
      path = path[elem];
    }
    path[dirName] = { files: [] };
  }

  part_two() {
    while (this.instructions.length !== 0) {
      let instruction = this.instructions.shift();
      if (instruction === "$ ls") {
        this.listFiles();
      } else {
        this.changeDirectory(instruction);
      }
    }
    this.printTree();
    let targetSize = this.getSize("/") - 40000000;
    let possibleSizes = [];
    for (let dir of this.directories) {
      let size = this.getSize(dir.path);
      if (size >= targetSize) possibleSizes.push(size);
    }
    return Math.min(...possibleSizes);
  }

  parseInfos(raw_data) {
    return raw_data;
  }
}

module.exports = AdventOfCode;

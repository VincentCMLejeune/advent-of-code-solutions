class AdventOfCode {
  constructor(raw_data) {
    this.infos = this.parseInfos(raw_data);
    this.queue = this.getRoots(this.infos);
    this.doing = [];
    this.finished = [];
  }

  part_one() {
    let order = "";
    while (this.queue.length !== 0) {
      let curNode = this.getCurNode();
      this.queue = this.queue.filter((key) => key !== curNode.key);
      this.finished.push(curNode.key);
      order += curNode.key;
      if (!curNode.children) return order;
      for (let child of curNode.children) {
        if (!this.queue.includes(child) && !this.finished.includes(child))
          this.queue.push(child);
      }
      this.queue.sort();
    }
    return order;
  }

  part_two(numWorkers, numSeconds) {
    const workers = this.getWorkers(numWorkers);
    const secondsMap = this.getSecondsMap(numSeconds);
    let seconds = 0;
    while (this.queue.length !== 0 || this.doing.length !== 0) {
      for (let i = 1; i <= numWorkers; i++) {
        if (workers[i].time === secondsMap[workers[i].task]) {
          this.finished.push(workers[i].task);
          this.doing = this.doing.filter((key) => key !== workers[i].task);
          workers[i].task = null;
        }
      }
      for (let i = 1; i <= numWorkers; i++) {
        if (workers[i].time === secondsMap[workers[i].task]) {
          this.finished.push(workers[i].task);
          this.doing = this.doing.filter((key) => key !== workers[i].task);
          workers[i].task = null;
        }

        if (workers[i].task === null) {
          let newNode = this.getCurNode();
          if (newNode !== null) {
            this.doing.push(newNode.key);
            this.queue = this.queue.filter((key) => key !== newNode.key);
            workers[i].time = 0;
            workers[i].task = newNode.key;
            if (newNode.children) {
              for (let child of newNode.children) {
                if (
                  !this.queue.includes(child) &&
                  !this.finished.includes(child)
                )
                  this.queue.push(child);
              }
            }
            this.queue.sort();
          }
        }
        workers[i].time++;
      }
      seconds++;
    }
    return seconds - 1;
  }

  getWorkers(num) {
    const workers = {};
    for (let i = 1; i <= num; i++) {
      workers[i] = {
        task: null,
        time: 0,
      };
    }
    return workers;
  }

  getSecondsMap(numSeconds) {
    const secondsMap = {};
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (let char of alphabet) {
      secondsMap[char] = alphabet.indexOf(char) + 1 + numSeconds;
    }
    secondsMap.null = Infinity;
    return secondsMap;
  }

  getCurNode() {
    for (let node of this.queue) {
      if (this.requirementsMet(node)) return this.infos[node];
    }
    throw new Error(`No nodes in queue meets all requirements : ${this.queue}`);
  }

  getCurNode() {
    for (let node of this.queue) {
      if (this.requirementsMet(node)) return this.infos[node];
    }
    return null;
  }

  requirementsMet(node) {
    node = this.infos[node];
    if (!node.required) return true;
    return node.required.every((requiredItem) =>
      this.finished.includes(requiredItem)
    );
  }

  getRoots(data) {
    let roots = [];
    for (let key of Object.keys(data)) {
      if (!data[key].required) roots.push(key);
    }
    return roots.sort();
  }

  parseInfos(raw_data) {
    const parsed_data = {};
    for (let line of raw_data) {
      line = line.split(" must be finished before step ");
      let origin = line[0].split("Step ")[1];
      let destination = line[1].split(" can begin.")[0];
      if (!parsed_data[origin]) {
        parsed_data[origin] = {
          key: origin,
          children: [destination],
        };
      } else {
        if (parsed_data[origin].children) {
          parsed_data[origin].children.push(destination);
        } else {
          parsed_data[origin].children = [destination];
        }
      }
      if (!parsed_data[destination]) {
        parsed_data[destination] = {
          key: destination,
          required: [origin],
        };
      } else {
        if (parsed_data[destination].required) {
          parsed_data[destination].required.push(origin);
        } else {
          parsed_data[destination].required = [origin];
        }
      }
    }

    return parsed_data;
  }
}

module.exports = AdventOfCode;

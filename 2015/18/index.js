class AdventOfCode {
  constructor(raw_data) {
    this.lights = this.parseInfos(raw_data);
  }

  part_one(steps) {
    let lights = this.circleLights(this.lights);
    for (let i = 0; i < steps; i++) {
      lights = this.updateLights(lights);
    }
    return this.countLights(lights);
  }

  part_two(steps) {
    let lights = this.lights
    let rowLength = lights[0].length;
    lights[0].pop();
    lights[0].shift();
    lights[0].unshift("#");
    lights[0].push("#");
    lights[rowLength - 1].pop();
    lights[rowLength - 1].shift();
    lights[rowLength - 1].unshift("#");
    lights[rowLength - 1].push("#");
    lights = this.circleLights(lights);
    for (let i = 0; i < steps; i++) {
      lights = this.updateLightsWithSomeLightsStuckOn(lights);
    }
    return this.countLights(lights);
  }

  updateLightsWithSomeLightsStuckOn(lights) {
    let newLights = [];
    for (let i = 1; i < lights.length - 1; i++) {
      let row = [];
      for (let j = 1; j < lights[i].length - 1; j++) {
        let neighbors = this.countNeighboringLights(i, j, lights);
        if (lights[i][j] === "#") {
          if (neighbors === 2 || neighbors === 3) {
            row.push("#");
          } else {
            row.push(".");
          }
        } else {
          if (neighbors === 3) {
            row.push("#");
          } else {
            row.push(".");
          }
        }
      }
      newLights.push(row);
    }
    let rowLength = newLights[0].length;
    newLights[0].pop();
    newLights[0].shift();
    newLights[0].unshift("#");
    newLights[0].push("#");
    newLights[rowLength - 1].pop();
    newLights[rowLength - 1].shift();
    newLights[rowLength - 1].unshift("#");
    newLights[rowLength - 1].push("#");
    return this.circleLights(newLights);
  }

  updateLights(lights) {
    let newLights = [];
    for (let i = 1; i < lights.length - 1; i++) {
      let row = [];
      for (let j = 1; j < lights[i].length - 1; j++) {
        let neighbors = this.countNeighboringLights(i, j, lights);
        if (lights[i][j] === "#") {
          if (neighbors === 2 || neighbors === 3) {
            row.push("#");
          } else {
            row.push(".");
          }
        } else {
          if (neighbors === 3) {
            row.push("#");
          } else {
            row.push(".");
          }
        }
      }
      newLights.push(row);
    }
    return this.circleLights(newLights);
  }

  countNeighboringLights(x, y, lights) {
    let count = 0;
    for (let i = x - 1; i <= x + 1; i++) {
      if (lights[i][y - 1] === "#") {
        count++;
      }
      if (lights[i][y + 1] === "#") {
        count++;
      }
    }
    if (lights[x - 1][y] === "#") {
      count++;
    }
    if (lights[x + 1][y] === "#") {
      count++;
    }
    return count;
  }

  circleLights(lights) {
    let circledLights = [];
    let empty_row = [];
    for (let i = 0; i < lights[0].length + 2; i++) {
      empty_row.push(".");
    }
    circledLights.push(empty_row);
    for (let row of lights) {
      row.unshift(".");
      row.push(".");
      circledLights.push(row);
    }
    circledLights.push(empty_row);
    return circledLights;
  }

  printLights(lights) {
    console.log("\n");
    for (let light of lights) {
      console.log(light.join(""));
    }
  }

  countLights(lights) {
    let res = 0;
    for (let light of lights) {
      res += light.filter((elem) => elem === "#").length;
    }
    return res;
  }

  parseInfos(raw_data) {
    return raw_data.map((row) => row.split(""));
  }
}

module.exports = AdventOfCode;

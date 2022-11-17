class AdventOfCode {
  constructor(raw_data) {
    this.ingredients = this.parseInfos(raw_data);
    this.recipes = this.iterate(this.ingredients.length);
  }

  part_one() {
    let bestScore = -Infinity;
    for (let recipe of this.recipes) {
      let score = this.bake(recipe);
      bestScore = Math.max(bestScore, score);
    }
    return bestScore;
  }

  bake(recipe) {
    let capacity = this.add("capacity", recipe);
    let durability = this.add("durability", recipe);
    let flavor = this.add("flavor", recipe);
    let texture = this.add("texture", recipe);
    return capacity * durability * flavor * texture;
  }

  add(char, recipe) {
    let score = 0;
    for (let i = 0; i < recipe.length; i++) {
      score += this.ingredients[i][char] * recipe[i];
    }
    return Math.max(score, 0);
  }

  iterate(len) {
    let recipes = [];
    if (len === 4) {
      for (let i = 0; i <= 100; i++) {
        for (let j = 0; j <= 100 - i; j++) {
          for (let k = 0; k <= 100 - i - j; k++) {
            let l = 100 - i - j - k;
            recipes.push([i, j, k, l]);
          }
        }
      }
    } else {
      for (let i = 0; i <= 100; i++) {
        let l = 100 - i;
        recipes.push([i, l]);
      }
    }
    return recipes;
  }

  part_two() {
    let bestScore = -Infinity;
    for (let recipe of this.recipes) {
      let score = this.bake500(recipe);
      bestScore = Math.max(bestScore, score);
    }
    return bestScore;
  }

  bake500(recipe) {
    let calories = this.add("calories", recipe);
    if (calories !== 500) return 0;
    let capacity = this.add("capacity", recipe);
    let durability = this.add("durability", recipe);
    let flavor = this.add("flavor", recipe);
    let texture = this.add("texture", recipe);
    return capacity * durability * flavor * texture;
  }

  parseInfos(raw_data) {
    const parsed_data = [];
    for (let line of raw_data) {
      let newLine = {};
      line = line.split(": ");
      newLine.name = line[0];
      for (let ingredient of line[1].split(", ")) {
        ingredient = ingredient.split(" ");
        newLine[ingredient[0]] = Number(ingredient[1]);
      }
      parsed_data.push(newLine);
    }
    return parsed_data;
  }
}

module.exports = AdventOfCode;

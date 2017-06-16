var Hero = function(name, favouriteFood) {
  this.name = name;
  this.health = 0;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype = {
  talk: function() {
    return "Hi. My name is " + this.name;
  },

  taskCount: function() {
    return this.tasks.length;
  },

  eat: function(food) {
    if(food.name === this.favouriteFood) {
      this.health += (food.replenishmentValue * 1.5)
    } else {
      this.health += food.replenishmentValue;
    }
  },

  addTask: function(task) {
    this.tasks.push(task);
  },

  sortByDifficulty: function(tasks) {
    this.tasks.sort(function(task1, task2) {
      return task1.difficultyLevel - task2.difficultyLevel;
    });
  },

  sortByUrgency: function(tasks) {
    this.tasks.sort(function(task1, task2) {
      return task1.urgencyLevel - task2.urgencyLevel;
    });
  },

  sortByReward: function(tasks) {
    this.tasks.sort(function(task1, task2) {
      return task1.reward - task2.reward;
    });
  },

}

module.exports = Hero;
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
    this.health += food.replenishmentValue;
  }

}

module.exports = Hero;
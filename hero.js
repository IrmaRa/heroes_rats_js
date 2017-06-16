var Hero = function(name, food) {
  this.name = name;
  this.health = 0;
  this.food = food;
  this.tasks = [];
}

Hero.prototype = {
  talk: function() {
    return "Hi. My name is " + this.name;
  },
  
  taskCount: function() {
    return this.tasks.length;
  }

}

module.exports = Hero;
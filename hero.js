var Hero = function(name, food) {
  this.name = name;
  this.health = 0;
  this.food = food;
}

Hero.prototype = {
  talk: function() {
    return "Hi. My name is " + this.name;
  }
}

module.exports = Hero;
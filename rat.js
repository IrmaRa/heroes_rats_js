var Rat = function() {

}


Rat.prototype = {
  touchFood: function(food) {
    return food.poisonous = true;
  }
}

module.exports = Rat;
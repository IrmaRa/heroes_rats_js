var assert = require('assert');
var Rat = require('../rat.js');
var Food = require('../food.js');


describe("Rat", function() {

  var rat;
  var food;

  beforeEach(function() {
    rat = new Rat();
    food = new Food("pizza", 10);

  });

  it('should touch food, food becomes poisonous', function() {
    rat.touchFood(food);
    assert.strictEqual(true, food.poisonous);
  });

});

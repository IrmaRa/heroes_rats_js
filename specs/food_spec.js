var assert = require('assert');
var Food = require('../food.js');

describe("Food", function() {

  var food;

  beforeEach(function() {
    food = new Food("pizza", 10);
  });

  it('should have a name', function() {
    assert.strictEqual("pizza", food.name);
  });

  it('should have a replenishment value', function() {
    assert.strictEqual(10, food.replenishmentValue);
  });

});

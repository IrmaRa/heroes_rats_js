var assert = require('assert');
var Food = require('../food.js');

describe("Food", function() {

  var food1;

  beforeEach(function() {
    food1 = new Food("pizza", 10);
  });

  it('should have a name', function() {
    assert.strictEqual("pizza", food1.name);
  });

  it('should have a replenishment value', function() {
    assert.strictEqual(10, food1.replenishmentValue);
  });

});


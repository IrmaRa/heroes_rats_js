var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');


describe("Hero", function() {

  var hero;
  var food1;
  var food2;

  beforeEach(function() {
    hero = new Hero("Billy", "pizza");
    food1 = new Food("pizza", 10);
    food2 = new Food("salad", 3);
  });

  it('should have a name', function() {
    assert.strictEqual("Billy", hero.name);
  });

  it('should have a health', function() {
    assert.strictEqual(0, hero.health);
  });

  it('should have favourite food', function() {
    assert.strictEqual("pizza", hero.favouriteFood);
  });

  it('should talk saying their name', function() {
    assert.strictEqual("Hi. My name is Billy", hero.talk());
  });

  it('should have a collection of tasks to complete', function() {
    assert.strictEqual(0, hero.taskCount());
  });

  it('should eat and health should go up', function() {
    hero.eat(food2);
    assert(3, hero.health);
  });


  // - A hero should be able to eat food, and health should go up by the replenishment value
  // - If the food is their favourite food, their health should go up by 1.5 * value.
  // - A hero should be able to sort their tasks by difficulty, urgency or reward.
  // - A hero should be able to view tasks that are marked as completed or incomplete.

});


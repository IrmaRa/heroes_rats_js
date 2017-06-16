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
    assert.strictEqual(3, hero.health);
  });

  it('should increase health by 1.5 if favourite food', function() {
    hero.eat(food1);
    assert.strictEqual(15, hero.health);
  });


  // - A hero should be able to sort their tasks by difficulty, urgency or reward.
  // - A hero should be able to view tasks that are marked as completed or incomplete.

});


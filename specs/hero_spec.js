var assert = require('assert');
var Hero = require('../hero.js');


describe("Hero", function() {

  var hero;

  beforeEach(function() {
    hero = new Hero("Billy", "pizza");
  });

  it('should have a name', function() {
    assert.strictEqual("Billy", hero.name);
  });

  it('should have a health', function() {
    assert.strictEqual(0, hero.health);
  });

  it('should have favourite food', function() {
    assert.strictEqual("pizza", hero.food);
  });

  it('should talk saying their name', function() {
    assert.strictEqual("Hi. My name is Billy", hero.talk());
  });

  it('should have a collection of tasks to complete', function() {
    assert.strictEqual(0, hero.taskCount());
  });

});


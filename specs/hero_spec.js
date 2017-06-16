var assert = require('assert');
var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');



describe("Hero", function() {

  var hero;
  var food1;
  var food2;
  var task1;
  var task2;
  var task3;

  beforeEach(function() {
    hero = new Hero("Billy", "pizza");
    food1 = new Food("pizza", 10);
    food2 = new Food("salad", 3);
    task1 = new Task(10, 1, 8);
    task2 = new Task(4, 3, 10);
    task3 = new Task(7, 2, 3);
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

  it('should add task', function() {
    hero.addTask(task1);
    assert.strictEqual(1, hero.taskCount());
  });

  it('should sort by difficulty', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortByDifficulty();
    assert.deepEqual([task2, task3, task1], hero.tasks);
  });

  it('should sort by urgency', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortByUrgency();
    assert.deepEqual([task1, task3, task2], hero.tasks);
  });

  it('should sort by reward', function() {
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.sortByReward();
    assert.deepEqual([task3, task1, task2], hero.tasks);
  });





  // - A hero should be able to sort their tasks by difficulty, urgency or reward.
  // - A hero should be able to view tasks that are marked as completed or incomplete.

});


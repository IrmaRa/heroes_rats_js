var assert = require('assert');
var Task = require('../task.js');

describe("Task", function() {

  var task;

  beforeEach(function() {
    task = new Task(10, 2, 8);

  });

  it('should have a difficulty level', function() {
    assert.strictEqual(10, task.difficultyLevel);
  });

  it('should have an urgency level', function() {
    assert.strictEqual(2, task.urgencyLevel);
  });

  it('should have a reward', function() {
    assert.strictEqual(8, task.reward);
  });

  it('should be able to be marked as completed', function() {
    assert.strictEqual(true, task.complete(task));
  });

  it('should return completed status true when completed', function() {
    task.complete(task);
    assert.strictEqual(true, task.completedStatus);
  });

  it('should return completed status false when not completed', function() {
    assert.strictEqual(false, task.completedStatus);
  });

});

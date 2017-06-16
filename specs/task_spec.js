var assert = require('assert');
var Task = require('../task.js');

describe("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(10, 2, 8);
  });

  it('should have a difficulty level', function() {
    assert.strictEqual(10, task1.difficultyLevel);
  });

  it('should have an urgency level', function() {
    assert.strictEqual(2, task1.urgencyLevel);
  });

  it('should have a reward', function() {
    assert.strictEqual(8, task1.reward);
  });

});



// - A task has a reward
// - A task should be able to be marked as completed
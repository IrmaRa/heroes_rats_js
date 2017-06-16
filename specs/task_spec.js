var assert = require('assert');
var Task = require('../task.js');

describe("Task", function() {

  var task1;

  beforeEach(function() {
    task1 = new Task(10);
  });

  it('should have a difficulty level', function() {
    assert.strictEqual(10, task1.difficultyLevel);
  });

});
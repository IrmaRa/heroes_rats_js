var Task = function(difficultyLevel, urgencyLevel, reward) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completed = true;
}

Task.prototype = {
  complete: function(task) {
    return this.completed;
  }
}

module.exports = Task;
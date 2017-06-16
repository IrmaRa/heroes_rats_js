var Task = function(difficultyLevel, urgencyLevel, reward) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completedStatus = false;
}

Task.prototype = {
  complete: function(task) {
    return this.completedStatus = true;
  }
}

module.exports = Task;
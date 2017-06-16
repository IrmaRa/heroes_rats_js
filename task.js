var Task = function(difficultyLevel, urgencyLevel, reward) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.completedStatus = "incomplete";
}

Task.prototype = {
  complete: function() {
    return this.completedStatus = "completed";
  }
}

module.exports = Task;
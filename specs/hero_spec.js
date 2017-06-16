var assert = require('assert');
var Hero = require('../hero.js');


describe("Hero", function() {

  var hero;

  beforeEach(function() {
    hero = new Hero("Billy");
  });

  it('should have a name', function() {
    assert.strictEqual("Billy", hero.name);
  })
});



// - A Hero has health
// - A Hero has a favourite food
// - A Hero can talk saying their name
// - A Hero has a collection of tasks to complete


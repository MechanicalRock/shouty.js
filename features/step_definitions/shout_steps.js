var assert = require('assert');
var Shouty = require('../../lib/shouty');

module.exports = function () {
  var locations = {
    "St John's College" : [51.756073,  -1.25904],
    "Balliol College"   : [51.7550014, -1.2580754],
    "Trafalgar Square"  : [51.508039,  -0.128069]
  };
  var theShout;

  this.World = function (callback) {
    // @jbpros - requiring a callback here is a bit weird.
    // I'd like to just say: this.World = Shouty;
    callback();
    return new Shouty();
  };

  this.Given(/^"([^"]*)" is at "([^"]*)"$/, function (personName, locationName, callback) {
    var location = locations[locationName];
    this.personIsAt(personName, location);
    callback();
  });

  this.When(/^"([^"]*)" shouts$/, function (personName, callback) {
    theShout = "Anyone there?";
    this.personShouts(personName, theShout);
    callback();
  });

  this.Then(/^"([^"]*)" hears the shout$/, function (personName, callback) {
    assert.deepEqual(this.messagesHeardBy(personName), [theShout]);
    callback();
  });

  this.Then(/^"([^"]*)" doesn't hear anything$/, function (personName, callback) {
    assert.deepEqual(this.messagesHeardBy(personName), []);
    callback();
  });

};

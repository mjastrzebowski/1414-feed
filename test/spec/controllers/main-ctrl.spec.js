'use strict';

describe('Controller: MainCtrl', function () {

  var main;
  var Feed;
  var Player;

  // load the controller's module
  beforeEach(module('1414FeedApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, Feed, Player) {
    main = $controller('MainCtrl', {
      Feed: Feed,
      Player: Player
    });
  }));

  it('should have feed attached', function () {
    expect(main.feed).toBeDefined();
  });

  it('should have player attached', function () {
    expect(main.player).toBeDefined();
  });
});

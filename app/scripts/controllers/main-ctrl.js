'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .controller('MainCtrl', function (Feed, Player) {
    this.feed = new Feed();
    this.player = new Player();

    return this;
  });

'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .controller('FeedCtrl', function ($scope, Feed) {
    $scope.feed = new Feed();

  });

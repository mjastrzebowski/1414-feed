'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .controller('FeedCtrl', function ($scope, FeedManager) {
    $scope.getFeed = function () {
      FeedManager.get().then(function (data) {
        $scope.photos = data;
      });
    };
  });

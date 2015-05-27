'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.service:FeedManager
 * @description
 * # FeedManager
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .service('FeedManager', function ($q, Feed) {
    
    return {
      get: function () {
        return Feed.query().$promise.then(function (result) {
          return result.photos;
        });
      }
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.factory:Feed
 * @description
 * # Feed
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .factory('Feed', function ($resource) {
    var url = 'https://www.1414.de/api/v:version/categories/:category/photos?limit=:limit&order=:order&page=:page';
    var params = {
      version: 1,
      category: 5328,
      limit: 24,
      order: 'date',
      page: 1
    };
    var actions = {
      'query': {
        isArray: false
      }
    };
    return $resource(url, params, actions);
  });

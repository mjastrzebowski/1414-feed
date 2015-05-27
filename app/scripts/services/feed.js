'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.factory:Feed
 * @description
 * # Feed
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .factory('Feed', function ($q, $timeout, $resource) {
    var Feed = function () {
      this.url = 'https://www.1414.de/api/v:version/categories/:category/photos?limit=:limit&order=:order&page=:page';
      this.params = {
        version: 1,
        category: 5328,
        limit: 24,
        order: 'date',
        page: 1
      };
      this.actions = {
        'query': {
          isArray: false
        }
      };
      this.items = [];
      this.busy = false;
    };

    Feed.prototype.api = function () {
      return $resource(this.url, this.params, this.actions);
    };

    Feed.prototype.get = function () {
      return $q.when(this.api().query().$promise).then(function (results) {
        this.items = results.photos;
      }.bind(this));
    };

    Feed.prototype.nextPage = function () {
      if (this.busy) {
        return;
      }
      this.busy = true;

      this.params.page++;

      return $q.when(this.api().query().$promise).then(function (results) {
        Array.prototype.push.apply(this.items, results.photos);
        $timeout(function () {
          this.busy = false;
        }.bind(this), 2000);
      }.bind(this));
    };

    return Feed;
  });

'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.factory:Feed
 * @description
 * # Feed
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .factory('Feed', function ($q, $resource) {
    var Feed = function () {
      this.url = 'https://www.1414.de/api/v:version/categories/:category/photos?limit=:limit&order=:order&page=:page';
      this.params = {
        version: 1,
        category: 5328,
        limit: 10,
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
      if (this.busy) {
        return;
      }
      this.busy = true;

      return $q.when(this.api().query().$promise).then(function (results) {
        this.set(results.photos);
        this.busy = false;
        return this.items;
      }.bind(this));
    };

    Feed.prototype.set = function (items) {
      Array.prototype.push.apply(this.items, items);
    };

    Feed.prototype.nextPage = function () {
      this.params.page++;

      return this.get();
    };

    return Feed;
  });

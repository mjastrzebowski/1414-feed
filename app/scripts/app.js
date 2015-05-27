'use strict';

/**
 * @ngdoc overview
 * @name 1414FeedApp
 * @description
 * # 1414FeedApp
 *
 * Main module of the application.
 */
angular
  .module('1414FeedApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

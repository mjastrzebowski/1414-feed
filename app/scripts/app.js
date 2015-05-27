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
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

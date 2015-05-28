'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.service:Player
 * @description
 * # Player
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .service('Player', function ($log) {
    var Player = function () {
      this.config = {
        preload: 'none',
        sources: [],
        tracks: [],
        theme: {
          url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css'
        }
      };

      this._api = null;
      this.visible = false;
    };

    Player.prototype.onPlayerReady = function (api) {
      this._api = api;
    };

    Player.prototype.stopPlayer = function () {
      try {
        this._api.stop();
      } catch (e) {
        $log.error('Player error - video format is not supported in this browser');
      }
    };

    Player.prototype.play = function (item) {
      var url = item.video.urls.progressive;
      this.stopPlayer();
      this.config.sources = [{
        src: url,
        type: 'video/mp4'
      }];
      this._api.play();
      this.visible = true;
    };

    Player.prototype.stop = function () {
      this.stopPlayer();
      this.visible = false;
    };

    return Player;
  });

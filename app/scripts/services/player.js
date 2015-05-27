'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.service:Player
 * @description
 * # Player
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .service('Player', function ($q, $resource, $sce) {
    var Player = function () {
      this._api = null;
      this.config = {
        preload: 'none',
        sources: [
          { src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.mp4'), type: 'video/mp4' },
          { src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.webm'), type: 'video/webm' },
          { src: $sce.trustAsResourceUrl('http://static.videogular.com/assets/videos/videogular.ogg'), type: 'video/ogg' }
        ],
        tracks: [{
          src: 'http://www.videogular.com/assets/subs/pale-blue-dot.vtt',
          kind: 'subtitles',
          srclang: 'en',
          label: 'English',
          default: ''
        }],
        theme: {
          url: 'http://www.videogular.com/styles/themes/default/latest/videogular.css'
        }
      };

      this.visible = false;
    };

    Player.prototype.onPlayerReady = function (api) {
      this._api = api;
    };

    Player.prototype.play = function (item) {
      var url = item.video.urls.progressive;
      this._api.stop();
      this.config.sources = [{
        src: url,
        type: 'video/mp4'
      }];
      this._api.play();
      this.visible = true;
    };

    Player.prototype.stop = function () {
      this._api.stop();
      this.visible = false;
    };

    return Player;
  });

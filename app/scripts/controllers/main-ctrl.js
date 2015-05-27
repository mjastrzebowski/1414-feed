'use strict';

/**
 * @ngdoc function
 * @name 1414FeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1414FeedApp
 */
angular.module('1414FeedApp')
  .controller('MainCtrl', function ($sce, Feed) {
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

    this.playerApi = null;
    this.onPlayerReady = function(api) {
      this.playerApi = api;
    };

    this.setVideo = function(url) {
      this.playerApi.stop();
      this.config.sources = [{
        src: url,
        type: 'video/mp4'
      }];
    };

    this.feed = new Feed();

    this.play = function(item) {
      console.log('play item', item.video.urls);
      this.setVideo(item.video.urls.progressive);
    };
  });

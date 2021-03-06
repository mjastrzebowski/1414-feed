'use strict';

describe('Factory: Player', function () {

  var $rootScope;
  var player;

  // load the controller's module
  beforeEach(module('1414FeedApp'));

  // // Initialize the controller and a mock scope
  beforeEach(inject(function (Player, _$rootScope_) {
    player = new Player();
    $rootScope = _$rootScope_;
  }));

  describe('definition', function () {
    it('should provide onPlayerReady() method', function () {
      expect(player.onPlayerReady).toBeDefined();
    });
    it('should provide stopPlayer() method', function () {
      expect(player.stopPlayer).toBeDefined();
    });
    it('should provide open() method', function () {
      expect(player.open).toBeDefined();
    });
    it('should provide close() method', function () {
      expect(player.close).toBeDefined();
    });
    it('should provide config value', function () {
      expect(player.config).not.toBeNull();
    });
    it('should provide _api value', function () {
      expect(player._api).toBeDefined();
    });
    it('should provide visible value', function () {
      expect(player.visible).not.toBeNull();
    });
  });

  describe('player functions', function () {
    var item = {
      video: {
        urls: {
          progressive: 'fakeurl'
        }
      }
    };
    var fakeApi = jasmine.createSpyObj('api', ['play', 'stop']);

    beforeEach(function () {
      player.onPlayerReady(fakeApi);
    });

    it('should set video url and play it', function () {
      // when
      player.open(item);

      // then
      expect(fakeApi.play).toHaveBeenCalled();
      expect(player.config.sources[0].src).toEqual(item.video.urls.progressive);
    });

    it('should stop player', function () {
      // when
      player.close();

      // then
      expect(fakeApi.stop).toHaveBeenCalled();
    });
  });

});

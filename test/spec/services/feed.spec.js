'use strict';

describe('Factory: Feed', function () {

  var $q;
  var $resource;
  var $rootScope;
  var feed;

  // load the controller's module
  beforeEach(module('1414FeedApp'));

  // // Initialize the controller and a mock scope
  beforeEach(inject(function (Feed, _$rootScope_, _$q_, _$resource_) {
    feed = new Feed();
    $q = _$q_;
    $resource = _$resource_;
    $rootScope = _$rootScope_;
  }));

  describe('definition', function () {
    it('should provide api() method', function () {
      expect(feed.api).toBeDefined();
    });
    it('should provide get() method', function () {
      expect(feed.get).toBeDefined();
    });
    it('should provide set() method', function () {
      expect(feed.set).toBeDefined();
    });
    it('should provide next() method', function () {
      expect(feed.next).toBeDefined();
    });
    it('should provide url value', function () {
      expect(feed.url).not.toBeNull();
    });
    it('should provide params value', function () {
      expect(feed.params).not.toBeNull();
    });
  });

  describe('data manipulation', function () {
    var items = {
      photos: ['a', 'b']
    };
    var nextItems = {
      photos: ['c', 'd']
    };
    var mergedPhotos = ['a', 'b', 'c', 'd'];

    it('should get items from api', function () {
      // given
      spyOn(feed, 'api').and.returnValue(items);

      // when
      var results;
      feed.get().then(function (response) {
        results = response;
      });
      $rootScope.$apply();

      // then
      expect(feed.api).toHaveBeenCalled();
      expect(results).toEqual(items.photos);
    });

    it('should merge items when calling api twice', function () {
      // given
      feed.api = jasmine.createSpy().and.returnValue(items);

      // when
      feed.get();
      $rootScope.$apply();

      var results;
      feed.api = jasmine.createSpy().and.returnValue(nextItems);
      feed.next().then(function (response) {
        results = response;
      });
      $rootScope.$apply();

      // then
      expect(feed.api).toHaveBeenCalled();
      expect(results).toEqual(mergedPhotos);
    });
  });

});

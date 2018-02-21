'use strict';

describe('Feature Test:', function(){
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe('planes will be instructed to land', function() {
    it('land', function() {
      plane.land(airport);
      expect(airport.hangar()).toContain(plane);

    });
  });
});
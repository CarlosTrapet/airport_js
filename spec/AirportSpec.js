'use strict';

describe('Airport:', function() {
  var airport;
  var plane;
  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("capacity", function() {
    it("has a default capacity", function(){
      expect(airport.capacity()).toEqual(20);
    });
  });


  describe('landing planes:', function() {
    it('does not return undefined', function() {
      airport.land(plane);
      expect(airport.hangar()).toContain(plane);
    });

    it('has no planes by default', function() {
      expect(airport.hangar()).toEqual([]);
    });

    // it("plane status changes", function () {
    //   airport.land(plane);
    //   expect(plane.setStatus()).toEqual("Landed")
    // });
  });


  describe('taking off a plane', function() {
    it("takes off a plane", function () {
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar()).not.toContain(plane);
    });
  });

});

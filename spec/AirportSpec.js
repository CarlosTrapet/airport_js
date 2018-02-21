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

    it("can be changed", function() {
      airport.setCapacity(50);
      expect(airport.capacity()).toEqual(50);
    });
  });

  describe('landing planes:', function() {
    it('adds plane to hangar', function() {
      var weather = new Weather();
      spyOn(Math, 'random').and.returnValue(0.1);
      console.log(weather.isStormy())
      airport.land(plane);
      expect(airport.hangar()).toContain(plane);
    });

    it('has no planes by default', function() {
      expect(airport.hangar()).toEqual([]);
    });

    it('prevents landing planes when full', function() {
      var weather = new Weather();
      spyOn(Math, 'random').and.returnValue(0.1);
      for(var i = 0; i < 20; i++){
        airport.land(new Plane());
      };
        expect(function() {airport.land(plane)}).toThrow('Capacity full')
    });

    it('does not land when weather is stormy', function() {
      var weather = new Weather();
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(function() { airport.land(plane) }).toThrow("Weather too stormy to land")
    });

    // it("plane status changes", function () {
    //   airport.land(plane);
    //   expect(plane.setStatus()).toEqual("Landed")
    // });
  });


  describe('taking off a plane', function() {
    it("takes off a plane", function () {
      var weather = new Weather();
      spyOn(Math, 'random').and.returnValue(0.1);
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.hangar()).not.toContain(plane);
    });

    it("prevents take off when weather is stormy", function() {
      var weather = new Weather();
      // spyOn(Math, 'random').and.returnValue(0.1);
      airport._hangar.push(plane);
      spyOn(Math, 'random').and.returnValue(0.9);
      expect(function() { airport.takeOff(plane) }).toThrow("Weather too stormy to take off")
    });
  });

});

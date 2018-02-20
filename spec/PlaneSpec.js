'use strict';

describe('Plane', function() {
    var plane;
    var airport;

    beforeEach(function(){
        plane = new Plane();
        airport = new Airport();
    });

    it('lands the plane at an airport', function(){
        expect(plane.land).not.toBe(undefined);

    });
});
'use strict';

describe('Feature Test:', function(){
    var airport;
    var plane;

    beforeEach(function() {
        airport = new Airport();
        plane = new Plane();
    });

    describe('planes can', function() {
        it('land', function() {
            plane = new Plane();
            plane.land;
            expect(airport.hangar).toContain(plane);

        });
    });

});
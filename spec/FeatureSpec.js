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
            airport.land(plane);
            expect(airport.hangar()).toContain(plane);

        });
    });

});
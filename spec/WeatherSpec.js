'use strict';

describe('Weather:', function() {

  var weather = new Weather();

  it("does not return 'undefined'", function() {
    console.log(weather.isStormy());
    expect(weather.isStormy()).not.toBe(undefined);
    });
  });

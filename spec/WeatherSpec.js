'use strict';

describe('Weather:', function() {

  var weather = new Weather();

  it("does not return 'undefined'", function() {
    expect(weather.isStormy()).not.toBe(undefined);
    });
  });

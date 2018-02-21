
'use strict';


function Airport(weather){
  this._hangar = []
  this._capacity = 20;
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
};

Airport.prototype = {

  capacity: function() {
    return this._capacity;
  },

  setCapacity: function(number) {
    this._capacity = number;
  },

  isFull: function() {
    return this._hangar.length === this._capacity;
  },

  hangar: function() {
    return this._hangar;
  },

  land: function(plane) {
    if (this.isFull()) {
      throw "Capacity full";
    };
    if (this._weather.isStormy()) {
      throw "Weather too stormy to land";
    };
    this._hangar.push(plane);
    // plane.setStatus = "Landed";
  },

  takeOff: function(plane) {
    this._hangar.pop(plane);
  },

};

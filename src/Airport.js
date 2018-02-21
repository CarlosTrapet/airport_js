
'use strict';


function Airport(){
  this._hangar = []
  this._capacity = 20;
}

Airport.prototype = {

  capacity: function() {
    return this._capacity
  },

  hangar: function() {
    return this._hangar
  },

  land: function(plane) {
    this._hangar.push(plane);
    // plane.setStatus = "Landed";
  },

  takeOff: function(plane) {
    this._hangar.pop(plane)
  },

};

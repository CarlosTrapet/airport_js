'use strict';

function Airport() {
  this.hangar = [];

};

Airport.prototype.land = function(plane) {
  this.hangar.push(plane);
};





Error: Expected undefined to be defined.
'use strict';
(function() {
  angular.module('app.filters')
    .filter('thingFilter',function() {
      return function(input) {
        return input + ' test';
      };
    })
})();

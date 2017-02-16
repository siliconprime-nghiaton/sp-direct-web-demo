'use strict';

(function() {
  class HomeController {
    constructor() {
      this.title = 'Hello World'
    }
  }

  angular.module('app')
    .controller('HomeController',HomeController);
})();

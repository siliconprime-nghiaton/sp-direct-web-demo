'use strict';

(function() {
  class ThingService {
    constructor(Restangular) {
      this.baseUrl = Restangular.all('api/thing');
    }

    getAll() {
      return this.baseUrl.customGET('');
    }

    static factory(Restangular) {
      return new ThingService(Restangular);
    }
  }

  ThingService.factory.$inject = ['Restangular'];

  angular
    .module('app.services')
    .factory('ThingService',ThingService.factory)
})();

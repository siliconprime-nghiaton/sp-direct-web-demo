'use strict';
(function() {
  class ThingController {
    constructor($scope) {

    }
  }

  ThingController.$inject = ['$scope'];


  class ThingDirective {
    constructor($rootScope) {
      console.log("afdasdfasdfdas")
      this.templateUrl = 'components/directives/thing/thing.directive.html';
      this.bindToController = {
        title: '@'
      };
      this.link = this.linkFunction();
      this.restrict = 'AE';
      this.controllerAs = 'thingDirectiveCtrl';
      this.controller = ThingController;
    }

    linkFunction() {
      console.log('link function');
    }

    static directive() {
      return new ThingDirective();
    }
  }

  ThingDirective.directive.$nject = ['$rootScope'];

  angular.module('app.directives')
    .directive('thingDirective', ThingDirective.directive);
})();

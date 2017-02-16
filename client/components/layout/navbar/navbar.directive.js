'use strict';

angular.module('app')
  .directive('navbar', () => ({
    templateUrl: 'components/layout/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));

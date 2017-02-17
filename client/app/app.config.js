'use strict';
(function() {
  angular.module('app')
    .config(configuration);

  configuration.$inject = ['$urlRouterProvider', '$locationProvider'];
  function configuration($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/sign-in');

    $locationProvider.html5Mode(true);
  }

})();

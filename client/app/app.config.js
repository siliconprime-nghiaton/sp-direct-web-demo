'use strict';
(function() {
  angular.module('app')
    .config(configuration);

  configuration.$inject = ['$urlRouterProvider', '$locationProvider'];
  function configuration($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/signIn');

    $locationProvider.html5Mode(true);
  }

})();

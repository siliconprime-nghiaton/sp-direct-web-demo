'use strict';

(function() {

  angular
    .module('app')
    .config(routeConfig)
    .run(runBlock);

  routeConfig.$inject = ['$stateProvider'];
  function routeConfig($stateProvider) {
    $stateProvider
      .state('signIn', {
        url: '/sign-in',
        templateUrl: 'app/auth/signIn/signIn.html',
        controller: 'SignInController',
        controllerAs: 'vm'
      })

      .state('signUp', {
        url: '/sign-up',
        templateUrl: 'app/auth/signUp/signUp.html',
        controller: 'SignUpController',
        controllerAs: 'vm'
      })

      .state('forgotPassword', {
        url: '/forgot-password',
        templateUrl: 'app/auth/forgotPassword/forgotPassword.html',
        controller: 'ForgotPasswordController',
        controllerAs: 'vm'
      })

      .state('resetPassword', {
        url: '/reset-password',
        templateUrl: 'app/auth/resetPassword/resetPassword.html',
        controller: 'ResetPasswordController',
        controllerAs: 'vm'
      })

      .state('main', {
        url: '/main',
        templateUrl: 'app/main/index.html'
      })

      .state('main.home', {
        url: '/',
        templateUrl: 'app/main/home/home.html',
        controller: 'HomeController',
      })
  }

  runBlock.$inject = ['$rootScope','$state'];
  function runBlock($rootScope,$state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
      console.log("State Change Start Event",toState);
      if (toState.name === 'index') {
        $state.go('signUp')
      }
    })
  }

})();

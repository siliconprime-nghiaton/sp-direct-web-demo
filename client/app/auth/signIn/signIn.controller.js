'use strict';

(function() {
  class SignInController {
    constructor($state) {
      this.$state = $state;
    }

    submit(form) {
      form.$setSubmitted();
      if (form.$valid) {
        this.$state.go('main.home')
      }
    }
  }

  SignInController.$inject = ['$state'];

  angular.module('app')
    .controller('SignInController',SignInController);
})();

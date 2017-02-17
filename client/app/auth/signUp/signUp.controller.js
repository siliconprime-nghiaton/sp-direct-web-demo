'use strict';

(function() {
  class SignUpController {
    constructor($state) {
      this.$state = $state;
    }

    submit(form) {
      form.$setSubmitted();
      if (form.$valid) {
        console.log("form")
      }
      //this.$state.go('main.home')
    }
  }

  SignUpController.$inject = ['$state'];

  angular.module('app')
    .controller('SignUpController',SignUpController);
})();

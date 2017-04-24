'use strict';

(function() {
  class SignUpController {
    constructor($state, ModalService) {
      this.$state = $state;
      this.ModalService = ModalService;
    }

    submit(form) {
      form.$setSubmitted();
      if (form.$valid) {
        console.log("form");
        this.ModalService.openSignUpSuccessModal();
      }
      //this.$state.go('main.home')
    }
  }

  SignUpController.$inject = ['$state','ModalService'];

  angular.module('app')
    .controller('SignUpController',SignUpController);
})();

'use strict';

(function() {
  class ForgotPasswordController {
    constructor($state, ModalService) {
      this.$state = $state;
      this.ModalService = ModalService;
    }

    submit(form) {
      form.$setSubmitted();
      if (form.$valid) {
        console.log("form");
        this.ModalService.openForgotPasswordSuccessModal();
      }
    }
  }

  ForgotPasswordController.$inject = ['$state','ModalService'];

  angular.module('app')
    .controller('ForgotPasswordController',ForgotPasswordController);
})();

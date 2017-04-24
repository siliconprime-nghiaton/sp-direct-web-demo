'use strict';

(function() {
  class ResetPasswordController {
    constructor($state, ModalService) {
      this.$state = $state;
      this.ModalService = ModalService;

      this.tokenType = 'active'
      this.tokenType = 'expired'
    }

    submit(form) {
      form.$setSubmitted();
      if (form.$valid) {
        console.log("form");
        this.ModalService.openForgotPasswordSuccessModal();
      }
    }
  }

  ResetPasswordController.$inject = ['$state','ModalService'];

  angular.module('app')
    .controller('ResetPasswordController',ResetPasswordController);
})();

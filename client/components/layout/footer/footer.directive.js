'use strict';

angular.module('app')
  .directive('footer', function () {
    return {
      templateUrl: 'components/layout/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });

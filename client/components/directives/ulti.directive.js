'use strict';
(function() {
  function matchDirective($parse) {
    return {
      require: '?ngModel',
      restrict: 'A',
      link: function(scope, elem, attrs, ctrl) {
        if(!ctrl) {
          if(console && console.warn){
            console.warn('Match validation requires ngModel to be on the element');
          }
          return;
        }

        let matchGetter = $parse(attrs.match);
        let caselessGetter = $parse(attrs.matchCaseless);

        scope.$watch(getMatchValue, function(){
          ctrl.$$parseAndValidate();
        });

        ctrl.$validators.match = function(){
          let match = getMatchValue();
          if(caselessGetter(scope) && angular.isString(match) && angular.isString(ctrl.$viewValue)){
            return ctrl.$viewValue.toLowerCase() === match.toLowerCase();
          }
          return ctrl.$viewValue === match;
        };

        function getMatchValue(){
          let match = matchGetter(scope);
          if(angular.isObject(match) && match.hasOwnProperty('$viewValue')){
            match = match.$viewValue;
          }
          return match;
        }
      }
    };
  }

  matchDirective.$inject = ["$parse"];

  angular.module('app.directives')
    .directive('match',matchDirective)
})();

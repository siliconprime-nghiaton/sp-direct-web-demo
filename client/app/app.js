'use strict';

angular.module('app', [
  'app.constants',
  'app.services',
  'app.filters',
  'app.directives',
  'app.modals',
  'app.auth',

  //3rd modules
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
]).run(runBlock);

runBlock.$inject = ['$rootScope'];
function runBlock($rootScope) {
  $rootScope.safeApply = function(fn) {
    let phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof (fn) === 'function')) { fn(); }
    } else { this.$apply(fn); }
  };
}

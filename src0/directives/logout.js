(function() {

'use strict';

angular
  .module('app')
  .directive('logout', LogoutDirective);

/**
 * @name LogoutDirective
 *
 * @desc Handle logout click
 *
 * @ngInject
 */
function LogoutDirective($rootScope, $state, AuthEvents, Session) {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, element, attrs) {
      element.bind('click', function() {
        Session.destroy();
        $state.go('login');
        $rootScope.$broadcast(AuthEvents.LOGOUT_SUCCESS);
      })
    }
  };
}

})();

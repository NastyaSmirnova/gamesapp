/**
 * Main app module Run Function
 *
 * Injections:
 *
 *  built-in services:
 *    - $rootScope
 *    - $location
 *
 *  custom services:
 *    - authService
 *
 * @desc Check if user is authorized on page load
 *
 */
(function () {

  'use strict';

  angular
    .module('app')
    .run(function (
      $rootScope,
      $location,
      authService
    ) {
      $rootScope.$on('$stateChangeStart', function(event, next, previous) {
        var authData = authService.isLoggedIn();

        if (authData) {
          $rootScope.me = {
            email: authData.password.email,
            uid: authData.uid,
            status: true
          };
        } else {
          $rootScope.me = {};
          $location.path('/auth/login');
        }
      });
    });

})();

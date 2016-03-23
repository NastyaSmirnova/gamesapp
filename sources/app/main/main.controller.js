/**
 * Games app Main Controller
 *
 * Injections:
 *
 *  built-in services:
 *    - $scope
 *    - $location
 *
 *  custom services:
 *    - authService
 *    - gamesService
 *
 */
(function () {

  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', function (
      $scope,
      $location,
      authService,
      gamesService
    ) {

      /**
       * LogOut function
       *
       * @desc Resets Firebase connection,
       *       logs user out of the application,
       *       changes location to login page.
       */

      $scope.logOut = function () {
        gamesService.reset();
        $location.path('/auth/login');
        authService.logout();
      };
    });

})();

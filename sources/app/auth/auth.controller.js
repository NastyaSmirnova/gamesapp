/**
 * Auth Controller
 *
 * Injections:
 *
 *  built-in services:
 *    - $scope
 *    - $rootScope
 *    - $location
 *    - $state
 *
 *  custom services:
 *    - authService
 *
 */
(function () {

  'use strict';

  angular.module('app.auth')
    .controller('AuthCtrl', function (
      $rootScope,
      $scope,
      $location,
      $state,
      authService
    ) {
      var user = {};
      var self = this;

      // Define user's current action - login or register
      $scope.currentAction = $state.current.action;
      $rootScope.$on('$stateChangeStart', function (event, state) {
        $scope.currentAction = state.action;
      });

      /**
       * Signup Function
       *
       * @param {Object} user - new user to sign up
       *
       * @desc if user was created successfully - log user in,
       *       else show error message
       */
      function signup (user) {
        return authService.register(user)
          .then(function () {
            return login(user);
          })
          .catch(function (error) {
            self.error = error.message;
          });
      }

      /**
       * Login Function
       *
       * @param {Object} user - user to login
       *
       * @desc if success - let user in and go to games page,
       *       else show error message
       */
      function login (user) {
        return authService.login(user)
          .then(function () {
            $location.path('/games');
          })
          .catch(function (error) {
            self.error = error.message;
          });
      }

      angular.extend(self, {
        user: user,
        signup: {
          action: signup,
          label : 'Sign Up'
        },
        login: {
          action: login,
          label: 'Log In'
        }
      });
    });
})();

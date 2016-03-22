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

      $scope.currentAction = $state.current.action;

      $rootScope.$on('$stateChangeStart', function (event, state) {
        $scope.currentAction = state.action;
      });

      function signup (user) {
        return authService.register(user)
          .then(function () {
            return login(user);
          })
          .catch(function (error) {
            self.error = error.message;
          });
      }

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

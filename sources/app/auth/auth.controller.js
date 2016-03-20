(function () {

  'use strict';

  angular.module('games.auth')
    .controller('AuthCtrl', function (
      $rootScope,
      $scope,
      $location,
      $state,
      authService
    ) {
      var user = {};
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
            // this.error = error;
            console.log(error);
          });
      }

      function login (user) {
        return authService.login(user)
          .then(function () {
            // $location.path('/games');
            console.log('success');
          })
          .catch(function (error) {
            // this.error = error;
            console.log(error);
          });
      }

      angular.extend(this, {
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

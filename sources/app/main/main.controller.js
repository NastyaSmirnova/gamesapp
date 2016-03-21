(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', function (
      $scope,
      $location,
      authService
    ) {
      $scope.logOut = function () {
        authService.logout();
        $location.path('/auth/login');
      };
    });

})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', function (
      $scope,
      $location,
      authService
    ) {
      $scope.currentPage = 0;

      $scope.numberOfPages = function (dlength, psize) {
        return Math.ceil(dlength / psize);
      };

      $scope.logOut = function () {
        $location.path('/auth/login');
        authService.logout();
      };
    });

})();

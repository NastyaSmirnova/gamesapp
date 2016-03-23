(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', function (
      $scope,
      $location,
      authService,
      gamesService
    ) {
      $scope.currentPage = 0;

      $scope.numberOfPages = function (dlength, psize) {
        return Math.ceil(dlength / psize);
      };

      $scope.logOut = function () {
        gamesService.reset();
        $location.path('/auth/login');
        authService.logout();
      };
    });

})();

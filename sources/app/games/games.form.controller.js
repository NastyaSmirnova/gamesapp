(function() {
  'use strict';

  angular
    .module('app.games')
    .controller('GamesFormCtrl', function ($scope) {
      $scope.games.formOpen = true;
    });

})();

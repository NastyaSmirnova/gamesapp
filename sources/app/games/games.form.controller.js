(function() {
  'use strict';

  angular
    .module('app.games')
    .controller('GamesFormCtrl', function (
      $scope,
      $stateParams,
      $location,
      gamesService
    ) {
      $scope.games.formOpen = true;

      var self = this;
      var current = new gamesService.Game();

      if ($stateParams.id !== 0) {
        gamesService.getGames().$loaded().then(function (games) {
          current = games.$getRecord($stateParams.id);
          angular.extend(self.current, current);
        });
      }

      function saveGame (game) {
        angular.extend(current, game);

        if (current.$id) {
          gamesService.update(current);
        } else {
          gamesService.save(current);
        }

        $scope.games.formOpen = false;
        $location.path('/games');
      }

      angular.extend(self, {
        current: current,
        saveGame: saveGame
      });
    });

})();

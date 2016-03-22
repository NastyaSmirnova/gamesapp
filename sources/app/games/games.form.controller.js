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
        if (game.$id) {
          angular.extend(current, game);
          gamesService.update(current);
        } else {
          gamesService.save(game);
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

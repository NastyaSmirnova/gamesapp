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
          self.current = games.$getRecord($stateParams.id);
        });
      }


      function saveGame (game) {
        if (game.$id) {
          gamesService.update(game);
        } else {
          gamesService.save(game);
        }

        $location.path('/games');
      }

      angular.extend(self, {
        current: current,
        saveGame: saveGame
      });
    });

})();

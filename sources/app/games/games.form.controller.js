/**
 * Game Edit Form Controller
 *
 * Injections:
 *
 *  built-in services:
 *    - $scope
 *    - $stateParams
 *    - $location
 *
 *  custom services:
 *    - gamesService
 */
(function () {
  'use strict';

  angular
    .module('app.games')
    .controller('GamesFormCtrl', function (
      $scope,
      $stateParams,
      $location,
      gamesService
    ) {
      // Tell game controller view elements that form is open
      $scope.games.formOpen = true;

      var self = this;
      var current = new gamesService.Game();

      // if route parameter id is not 0 get game info by its id
      if ($stateParams.id !== 0) {
        gamesService.getUserGames().$loaded().then(function (games) {
          current = games.$getRecord($stateParams.id);
          angular.extend(self.current, current);
        });
      }


      /**
       * SaveGame Function
       *
       * @param {Object} game - object to save
       *
       * @desc Defines if game is new or just edited and
       *       saves/updates it accordinally
       *       Closes edit form
       */
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

      function deleteGame (game) {
        gamesService.delete(current);
      }

      angular.extend(self, {
        current: current,
        saveGame: saveGame,
        deleteGame: deleteGame
      });
    });

})();

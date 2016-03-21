(function() {
  'use strict';

  angular
    .module('app.games')
    .factory('gamesService', function (
      $firebaseArray,
      $rootScope,
      firebaseDataService
    ) {

      var service = {
        Game: Game,
        getGames: getGames,
        save: saveGame,
        update: updateGame
      };

      var gamesData = $firebaseArray(firebaseDataService.games);

      function Game () {
        angular.extend(this, {
          name: '',
          userId: $rootScope.me.uid,
          time: 0,
          rating: 0,
          timestamp: Date.now()
        });
      }

      function getGames () {
        return gamesData;
      }

      function saveGame (game) {
        gamesData.$add(game);
      }

      function updateGame (game) {
        var item = gamesData.$getRecord(game.$id);

        gamesData.$save(item);
      }

      return service;

    });

})();

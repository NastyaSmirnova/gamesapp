/**
 * GamesService Factory
 *
 * Injections:
 *
 *  third party services:
 *    - $firebaseArray
 *    - $rootScope
 *
 *  custom services:
 *    - firebaseDataService
 *
 * @desc Defines get/create/update/delete handlers for games
 *
 * @returns {Object} Object of handlers
 *
 */
(function () {
  'use strict';

  angular
    .module('app.games')
    .factory('gamesService', function (
      $firebaseArray,
      $rootScope,
      firebaseDataService
    ) {

      var games = null;
      var service = {
        Game: Game,
        // getGames: getGames,
        save: saveGame,
        update: updateGame,
        getUserGames: getUserGames,
        reset: reset,
        delete: deleteGame
      };

      // var gamesData = $firebaseArray(firebaseDataService.games);

      /**
       * Game - Constructor
       *
       * @desc define default params for game
       */
      function Game () {
        angular.extend(this, {
          name: '',
          // userId: $rootScope.me.uid,
          time: 0,
          rating: 0,
          timestamp: Date.now()
        });
      }

      function getUserGames (uid) {
        if (!games) {
          games = $firebaseArray(firebaseDataService.users.child(uid).child('games'));
        }
        return games;
      }

      // function getGames () {
      //   return gamesData;
      // }

      function saveGame (game) {
        games.$add(game);
      }

      function deleteGame (game) {
        games.$remove(game);
      }

      function updateGame (game) {
        var item = games.$getRecord(game.$id);

        games.$save(item);
      }

      /**
       * reset - Function
       *
       * @desc Resets connection to firebase db
       *       
       */
      function reset () {
        if (games) {
          games.$destroy();
          games = null;
        }
      }

      return service;

    });

})();

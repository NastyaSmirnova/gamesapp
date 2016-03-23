(function() {
  'use strict';

  angular
    .module('app.games')
    .controller('GamesCtrl', function (
      $rootScope,
      gamesService
    ) {
      var uid = $rootScope.me.uid;
      var games = gamesService.getUserGames(uid);

      angular.extend(this, {
        list: games
      });
    });

})();

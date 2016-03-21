(function() {
  'use strict';

  angular
    .module('app.games')
    .controller('GamesCtrl', function (gamesService) {
      var games = gamesService.getGames();

      angular.extend(this, {
        list: games
      });
    });

})();

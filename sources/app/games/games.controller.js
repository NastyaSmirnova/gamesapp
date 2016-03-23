/**
 * Games Controller
 *
 * Injections:
 *
 *  built-in services:
 *    - $scope
 *    - $rootScope
 *
 *  custom services:
 *    - gamesService
 *
 */
(function () {
  'use strict';

  angular
    .module('app.games')
    .controller('GamesCtrl', function (
      $rootScope,
      $scope,
      gamesService
    ) {
      // get authorized user id
      var uid = $rootScope.me.uid;

      // get games that belongs to current user
      var games = gamesService.getUserGames(uid);

      // show first page on initialization
      var currentPage = 0;

      /**
       * NumberOfPages Function
       * 
       * @desc counts pages amount
       *
       * @param  {number} dlength length of data array
       * @param  {number} psize   how many items are visible on page
       * @return {number}         total pages amount
       */
      function numberOfPages (dlength, psize) {
        return Math.ceil(dlength / psize);
      }

      angular.extend(this, {
        list: games,
        currentPage: currentPage,
        numberOfPages: numberOfPages
      });
    });

})();

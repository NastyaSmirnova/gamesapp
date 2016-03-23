/**
 * Games app main module initialization
 *
 * Dependencies:
 *
 *  third party modules:
 *    - ui.router
 *    - firebase
 *
 *  custom modules:
 *    - app.auth
 *    - app.games
 *
 */
(function () {

  'use strict';

  angular
    .module('app', [
      'ui.router',
      'firebase',
      'app.auth',
      'app.games'
    ]);

})();

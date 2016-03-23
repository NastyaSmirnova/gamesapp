/**
 * Main app module Constant Settings
 *
 * @param {string} firebaseUrl - url to firebase db
 */
(function () {

  'use strict';

  angular
    .module('app')
    .constant('Settings', {
      firebaseUrl: 'https://gamesapp.firebaseio.com/'
    });
})();

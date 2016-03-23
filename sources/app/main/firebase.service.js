/**
 * FirebaseDataService Factory
 *
 *  Injections:
 *    - Settings
 *
 *  @desc Connects to Firebase DB
 *
 *  @return {Object} returns db collections
 */
(function() {

  'use strict';

  angular
    .module('app')
    .factory('firebaseDataService', function (
      Settings
    ) {
      var firebaseUrl = Settings.firebaseUrl;
      var root = new Firebase(firebaseUrl);

      var service = {
        root: root,
        users: root.child('users')
      };

      return service;
    });

})();

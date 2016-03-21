(function() {
  'use strict';

  angular
    .module('app')
    .factory('firebaseDataService', function (Settings) {
        var firebaseUrl = Settings.firebaseUrl;
        var root = new Firebase(firebaseUrl);

        var service = {
          root: root,
          users: root.child('users'),
          games: root.child('games')
        };

        return service;
      });

})();

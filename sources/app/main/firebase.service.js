(function() {
  'use strict';

  angular
    .module('games')
    .factory('firebaseDataService', function (Settings) {
        var firebaseUrl = Settings.firebaseUrl;
        var root = new Firebase(firebaseUrl);

        var service = {
          root: root,
          users: root.child('users')
        };

        return service;
      });
      
})();

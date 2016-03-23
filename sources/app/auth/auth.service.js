/**
 * AuthService Factory
 *
 * Injections:
 *
 *  third party services:
 *    - $firebaseArray
 *
 *  custom services:
 *    - firebaseDataService
 *
 * @desc Defines login, register, logout, isLoggedIn methods for user
 *
 * @returns {Object} Object of promises
 *
 */
(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('authService', function (
      $firebaseAuth,
      firebaseDataService
    ) {

      var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);

      var service = {
        firebaseAuthObject: firebaseAuthObject,
        register: register,
        login: login,
        logout: logout,
        isLoggedIn: isLoggedIn
      };


      function register(user) {
        return firebaseAuthObject.$createUser(user);
      }

      function login(user) {
        return firebaseAuthObject.$authWithPassword(user);
      }

      function logout() {
        firebaseAuthObject.$unauth();
      }

      function isLoggedIn() {
        return firebaseAuthObject.$getAuth();
      }

      return service;

    });

})();

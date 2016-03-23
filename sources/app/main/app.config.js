/**
*
* Main app module Config
*
* Injections:
*
*  built-in services:
*    - $stateProvider
*    - $urlRouterProvider
*
* @desc Defines app routes
*
*/
(function () {

  'use strict';

  angular
    .module('app')
    .config(function (
      $stateProvider,
      $urlRouterProvider
    ) {
      $urlRouterProvider.otherwise('/auth/login');

      $stateProvider
        .state('auth', {
          url: '/auth',
          templateUrl: 'sources/app/auth/auth.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth'
        })
        .state('auth.signup', {
          url: '/signup',
          action: 'signup'
        })
        .state('auth.login', {
          url: '/login',
          action: 'login'
        })
        .state('games', {
          url: '/games',
          templateUrl: 'sources/app/games/games.html',
          controller: 'GamesCtrl',
          controllerAs: 'games'
        })
        .state('games.edit', {
          url: '/:id',
          templateUrl: 'sources/app/games/games.form.html',
          controller: 'GamesFormCtrl',
          controllerAs: 'edit'
        });
    });

})();

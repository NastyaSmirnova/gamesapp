(function () {

  'use strict';

  angular
    .module('games', [
      'ui.router',
      'firebase',
      'games.auth'
    ])
    .constant('Settings', {
      firebaseUrl: 'https://gamesapp.firebaseio.com/',
    	roles: {
    		1: {
    			name: 'superadmin',
    			title: 'Super Admin'
    		},
    		2: {
    			name: 'user',
    			title: 'User'
    		}
    	}
    })
    .config(function ($stateProvider, $urlRouterProvider) {
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
        });
    });

})();

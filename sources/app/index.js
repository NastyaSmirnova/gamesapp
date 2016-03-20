(function () {

  'use strict';

  angular
    .module('games', [
      'ui.router',
      'firebase',
      'games.auth'
    ])
    .constant('Settings', {
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
      $urlRouterProvider.otherwise('/auth');

      $stateProvider
        .state('auth', {
          url: '/auth',
          templateUrl: 'sources/app/auth/auth.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth'
        });
    });

})();

(function () {

  'use strict';

  angular
    .module('app', [
      'ui.router',
      'firebase',
      'app.auth',
      'app.games'
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
    })
    .run(function ($rootScope, $location, authService) {
      $rootScope.$on('$stateChangeStart', function(event, next, previous) {
        var authData = authService.isLoggedIn();

        if (authData) {
          $rootScope.me = {
            email: authData.password.email,
            uid: authData.uid,
            status: true
          };
        } else {
          $rootScope.me = {};
          $location.path('/auth/login');
        }
      });
    });

})();

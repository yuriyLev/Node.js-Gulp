
'use strict';

angular.module('angdev', ['restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    
	$stateProvider
    .state('transactions', {
      url: "/transactions",
      templateUrl: "app/main/transactions.html"
    });
	state('settings', {
      url: "/settings",
      templateUrl: "app/settings/settings.html"
    });
	
    $urlRouterProvider.otherwise('/transactions');
  });
'use strict';

// Declare app level module which depends on views, and components
angular.module('shelexCollections', [
  'ngRoute',
  'shelexCollections.view1',
  'shelexCollections.view2',
  'shelexCollections.shelex'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/shelex'});
}]);

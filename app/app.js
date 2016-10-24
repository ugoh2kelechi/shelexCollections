'use strict';

// Declare app level module which depends on views, and components
angular.module('shelexCollections', [
  'ngRoute',
  'shelexCollections.aboutus',
  'shelexCollections.contactus',
  'shelexCollections.shelex'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .otherwise({redirectTo: '/shelex'});
}]);

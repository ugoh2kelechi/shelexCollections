'use strict';

angular.module('shelexCollections.contactus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contactus', {
    templateUrl: 'contactus/contactus.html',
    controller: 'contactusCtrl'
  });
}])

.controller('contactusCtrl', [function() {

}]);
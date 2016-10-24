'use strict';

angular.module('shelexCollections.aboutus', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/aboutus', {
    templateUrl: 'aboutus/aboutus.html',
    controller: 'aboutusCtrl'
  });
}])

.controller('aboutusCtrl', ['$scope','$http',function($scope,$http) {
	$http.get('json/shelex.json').success(function(data){
		$scope.aboutInfos = data;
	});
}]);
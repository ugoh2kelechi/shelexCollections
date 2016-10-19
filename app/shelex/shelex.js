
angular.module('shelexCollections.shelex',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/shelex', {
		templateUrl : 'shelex/shelex.html',
		controller: 'shelexCtrl'
	})
}])

.controller('shelexCtrl', ['$scope',function($scope){

	console.log('shelexCtrl Init');
}]);
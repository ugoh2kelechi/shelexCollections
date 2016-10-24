
angular.module('shelexCollections.shelex',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/shelex', {
		templateUrl : 'shelex/shelex.html',
		controller: 'shelexCtrl'
	})
	.when('/shelex/:shelexId', {
		templateUrl: 'shelex/shelex-details.html',
		controller: 'shelexDetailsCtrl'
	})
}])

.controller('shelexCtrl', ['$scope','$http',function($scope,$http){

	$http.get('json/shelex.json').success(function(data){

		$scope.shelexDatas = data;
	});

}])

.controller('shelexDetailsCtrl', ['$scope', '$routeParams', '$http', '$filter', function($scope, $routeParams, $http, $filter){
	var shelexId = $routeParams.shelexId;
	$http.get('json/shelex.json').success(function(data){
		$scope.shelex = $filter('filter')(data, function(d){
			return d.id == shelexId;
		})[0];
		$scope.mainImage = $scope.shelex.images[0].name;
	});

	$scope.setImage = function(image)
	{
		$scope.mainImage = image.name;
	}

}]);
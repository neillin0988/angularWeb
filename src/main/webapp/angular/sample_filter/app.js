
var app = angular.module('myApp', []);

app.controller('myCtrl', [ '$scope',
	function($scope) {
		$scope.cost = 1000000;
		$scope.date = new Date();
		$scope.num = 100000;
	}]
);
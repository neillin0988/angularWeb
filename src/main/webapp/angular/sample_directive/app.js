
var app = angular.module('myApp', []);

app.controller('myCtrl', [ '$scope',
	function($scope) {
		$scope.valueA = true;
		$scope.valueB = false;
		$scope.test = "";
		
		$scope.dataLs = [
			{name : "木劍", atk : 10, price : 100},
			{name : "鐵劍", atk : 20, price : 300},
			{name : "殺豬刀", atk : 50, price : 1000},
			{name : "倚天劍", atk : 9999, price : 999999},
		];
		
		$scope.ngClick = function($event) {
			$scope.valueA = !$scope.valueA;
			$scope.valueB = !$scope.valueB;
			
			$scope.test = "test";
		}
		
		$scope.ngMouseover = function($event) {
			$($event.target).val("ngMouseover");
		}
		
		$scope.ngMouseLeave = function($event) {
			$($event.target).val("[ngMouseLeave] click me");
		}
		
		$scope.ngChange = function($event) {
			$scope.changeValue = "[" + $scope.test + "]";
		}
		
		//ngChange is just for the input, if you want to listen the model do like this
		$scope.$watch('test', function(newValue, oldValue) {
			// console.log(newValue + "-" + oldValue);
			$scope.ngChange();
		});
		
		$scope.ngBlur = function($event) {
			$scope.blurValue = "[" + $scope.test + "]";
		}
	}]
);
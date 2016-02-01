
var app = angular.module('myApp', []);

app.controller('parentCtrl', function() {
		this.name = "p_name";
	}
);


app.controller('childCtrl', function() {
		this.name = "c_name";
	}
);

app.controller('parentCtrl2', 
	['$scope',
	function($scope) {
		$scope.name = "p_name";
	}]
);

app.controller('childCtrl2', 
	['$scope',
	function($scope) {
		//$scope.name = "c_name";
		$scope.name2 = "c_name2";
	}]
);

app.controller('parentCtrl3', 
	['$scope',
	function($scope) {
		$scope.data = {};
		$scope.data.name = "p_name";
	}]
);

app.controller('childCtrl3', 
	['$scope',
	function($scope) {
	}]
);

app.controller('parentCtrl4', 
	['$rootScope', '$scope',
	function($rootScope, $scope) {
		$rootScope.data = {};
		$rootScope.data.name = "rootScope_name";
	}]
);

app.controller('childCtrl4', 
	['$rootScope', '$scope',
	function($rootScope, $scope) {
	}]
);
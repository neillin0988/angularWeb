
var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', 'service1', 'service2', 
	function($scope, service1, service2) {
		$scope.name = "name";
		console.log(service1);
		console.log(service2);
		
		$scope['service1name'] = service1.name;
		$scope['service2name'] = service2.name;
	}]
);

app.controller('myCtrl2', ['service1', 'service2', 
	function(service1, service2) {
		this.name = "name";
		
		this['service1name'] = service1.name;
		this['service2name'] = service2.name;
	}]
);

var app = angular.module('myApp', []);

app.controller('myCtrl', [ '$scope', '$http', '$filter',
	function($scope, $http, $filter) {

	    $scope.sampleAjax = function() {
	        var url = "/sample/ajax";
	        var data = {};

            $http.post(url, data).then(
                function(resp) {
                    console.info('success ' + resp);
                    alert(resp['data'].msg)
                },
                function(resp) {
                    console.error('Error ' + resp);
                }
            );

	    }

	    $scope.sampleFilter = function() {
            alert($filter('currency')(1000))
	    }
	}]
);
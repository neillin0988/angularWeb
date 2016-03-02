var app = angular.module('myApp', ['ngResource']);

app.controller('myCtrl', function($scope, $http, $resource) {


    $scope.pageInit = function() {
        var url = "/publisher/find";
        var data = {
        };

        $http.post(url, data)
        .then(function(resp) {
            $scope.httpPublishers = resp.data.publishers;
        })
        .catch(function(data, status) {
        })
        .finally(function() {
        });

        $resource(url).save(data, function(resp) {
            $scope.resourcePublishers = resp.publishers;
        });

        $scope.$watch("http", function(value){
            console.log("$scope.http = " + $scope.http)
        })
        $scope.$watch("resource", function(value){
            console.log("$scope.resource = " + $scope.resource)
        })
    }
    $scope.pageInit();
});


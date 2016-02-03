var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/report', {
            templateUrl: '/ngRoute/page/component/report/report.html',
            controller: 'ReportController'
        }).when('/system', {
           templateUrl: '/ngRoute/page/component/system/system.html',
           controller: 'SystemController'
        })
}]);

app.controller('ReportController', function($scope) {
    $scope.title = 'REPORT!';
});

app.controller('SystemController', function($scope) {
    $scope.title = 'SYSTEM!';
});
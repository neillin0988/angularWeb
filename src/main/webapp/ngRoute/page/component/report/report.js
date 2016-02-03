var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/report', {
        templateUrl: '/ngRoute/page/component/report/report.html',
        controller: 'ReportController'
    })
}]);

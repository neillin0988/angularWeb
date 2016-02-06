app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/report', {
            templateUrl: '/ngRoute/page/component/report/report.html',
            controller: 'ReportController'
        })
}]);
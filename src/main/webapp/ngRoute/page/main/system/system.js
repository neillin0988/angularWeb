app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/system', {
           templateUrl: '/ngRoute/page/component/system/system.html',
           controller: 'SystemController'
        })
}]);

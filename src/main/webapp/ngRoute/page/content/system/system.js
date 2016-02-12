app.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('system', {
         parent: 'home',
         url: 'system',
         data: {
             displayName: "system"
         },
         views: {
             'content@': {
               templateUrl: '/ngRoute/page/content/system/system.html',
               controller: 'SystemController'
             }
         }
    });
}]);

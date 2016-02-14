app.config(
  function($stateProvider) {
    $stateProvider.state('home', {
        parent: 'site',
        url: '/',
        data: {
             displayName: "home"
        },
        views: {
            'content@': {
               templateUrl: '/ssp-web/page/content/home/home.html',
               controller: 'MainController'
            }
        }
    });
});
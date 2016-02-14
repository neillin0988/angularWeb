var app = angular.module('rmaxAdminApp', ['ui.router',
    'angularUtils.directives.uiBreadcrumbs',])
.run(function ($state) {
})

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('site', {
         'abstract': true,
         views: {
             'navbar@': {
                 templateUrl: 'page/component/navbar/navbar.html',
                 controller: 'NavbarController'
             },
             'sidebar@': {
                 templateUrl: 'page/component/sidebar/sidebar.html',
                 controller: 'SidebarController'
             }
         }});

    $urlRouterProvider.otherwise('/');
});

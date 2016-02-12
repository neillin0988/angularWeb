app.config(
  function($stateProvider) {
    $stateProvider.state('report', {
         parent: 'home',
         url: 'report',
         data: {
             displayName: "report"
         },
         views: {
             'content@': {
               templateUrl: '/ngRoute/page/content/report/report.html',
               controller: 'ReportController'
             }
         }
    });

  }
);
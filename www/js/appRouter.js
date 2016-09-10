// appRouter.js

(function() {

var appRouter = angular.module('md.appRouter');

appRouter.config(['$stateProvider', '$urlRouterProvider',appRouterFn]);

function  appRouterFn($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/base',
    abstract: true,
    templateUrl: 'modules/base/shell.view.html',
    controller: 'shellCtrl'
  })

    .state('app.master', {
      url: '/master',
      views: {
        'baseContent': {
          templateUrl: 'modules/master/master.view.html',
          controller: 'masterCtrl'
        }
      }
    })

  .state('app.details', {
    url: '/master/:itemId',
    views: {
      'baseContent': {
        templateUrl: 'modules/details/details.view.html',
        controller: 'detailsCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/base/master');
}

})()

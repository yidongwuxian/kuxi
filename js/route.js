var app = angular.module('myApp', ['ui.router']);
//路由 start
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('', '/main');
      $stateProvider
      .state('main', {
          url: '/main',
          templateUrl: '/kuxi/pages/main.html'
      })
      .state('login', {
              url: '/login',
              templateUrl: '/kuxi/pages/login.html',
              controller:  'loginCtrl'
      })
      $urlRouterProvider.otherwise('/login');
}]);
//路由 end

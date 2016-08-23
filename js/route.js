var app = angular.module('myApp', ['ui.router',"ngStorage",'ngAnimate', 'ngTouch', 'ngService', "ngConts"]);
//路由 start
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('', '/main');
      $stateProvider
      .state('main', {
          url: '/main',
          templateUrl: 'pages/main.html'
      })
      .state('login', {
              url: '/login',
              templateUrl: 'pages/login.html',
              controller:  'loginCtrl'
      })
      .state('main.myCenter', {
              url: '/myCenter',
              templateUrl: 'pages/myCenter.html',
      })
      .state('main.index', {
              url: '/index',
              templateUrl: 'pages/index.html',
      })
      .state('main.myOrder', {
              url: '/myOrder',
              templateUrl: 'pages/myOrder.html',
      })
      $urlRouterProvider.otherwise('/login');
}]);
//路由 end

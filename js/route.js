var app = angular.module('myApp', ['ui.router',"ngStorage",'ngAnimate', 'ngTouch', 'ngService', "ngConts"]);
//路由 start
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('', '/main');
      $stateProvider
      .state('main', {
          url: '/main',
          views: {
                "": {
                    templateUrl: 'pages/main.html',
                },
                "container@main": {
                    templateUrl: 'pages/index.html'
                },
                "ft@main": {
                    templateUrl: 'pages/ft.html'
                }
          }
      })
      .state('main.list', {
              url: '/list/:name',
              views: {
                    'content@main': {
                        templateUrl: getTemplateUrl
                    }
              }
      })
      .state('login', {
              url: '/login',
              templateUrl: 'pages/login.html',
              controller:  'loginCtrl'
      })
      .state('main.myCenter', {
              url: '/myCenter',
              views : {
                "container@main": {
                  templateUrl: 'pages/myCenter.html'
                }
              }
      })
      .state('main.index', {
              url: '/index',
              views : {
                "container@main": {
                  templateUrl: 'pages/index.html'
                }
              }
      })
      .state('main.myOrder', {
              url: '/myOrder',
              views : {
                "container@main": {
                  templateUrl: 'pages/myOrder.html'
                }
              }
      })
      $urlRouterProvider.otherwise('/login');

      function getTemplateUrl() {
            return 'pages/' + $params.name + '.html';
      }
}]);
//路由 end

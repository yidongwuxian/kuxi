var app = angular.module('myApp', ['ui.router',"ngStorage",'ngAnimate', 'ngTouch', 'ngService', "ngConts"]);
//路由 start
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.when('', '/main');
      $stateProvider
      .state('main', {
          url: '/main',
          views: {
                "": {
                    templateUrl: 'pages/main.html'
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
              url: '/list/:id',
              views: {
                    "": {
                        templateUrl: 'pages/list.html'
                    },
                    'container@main': {
                        templateUrl: getTemplateUrl
                    },
                    "ft@main": {
                        templateUrl: ''
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

      function getTemplateUrl($scope, $routeParams) {
          var page = "";
          switch($routeParams.id){
             case '7' :
                      page = "clothes";  break;
               case '8' :
                      page = "";         break;
               case '9' :
                      page = "";         break;
               case '10' :
                      page = "shoes";    break;
               case '11' :
                      page = "home";     break;
               case '12' :
                      page = "car";      break;
              case '13' :
                      page = "bang";     break;
              case '14' :
                      page = "week";     break;
          }
            return 'pages/' + page + '.html';
      }
}]);
//路由 end

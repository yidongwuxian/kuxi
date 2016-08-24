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
                }
          }
      })
      .state('main.list', {
              url: '/list/:id',
              views: {
                    'container@main': {
                        templateUrl: getTemplateUrl,
                        controller:  getCtrlUrl
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

      function getTemplateUrl($routeParams) {
          var page = "";
          switch($routeParams.id){
                case '7' :
                     page = "clothes";  break;
                case '8' :
                      page = "";        break;
                case '9' :
                      page = "";        break;
               case '10' :
                      page = "shoes";   break;
               case '11' :
                      page = "home";    break;
               case '12' :
                      page = "car";     break;
               case '13' :
                      page = "bang";    break;
               case '14' :
                      page = "week";    break;
          }
            return 'pages/' + page + '.html';
      }

      function getCtrlUrl($routeParams) {
          var controllerName = "";
          switch($routeParams.id){
                case '7' :
                     controllerName = "clothTabCtrl";    break;
                case '8' :
                      controllerName = "";               break;
                case '9' :
                      controllerName = "";               break;
               case '10' :
                      controllerName = "shoesTabCtrl";   break;
               case '11' :
                      controllerName = "homeTabCtrl";    break;
               case '12' :
                      controllerName = "carCtrl";        break;
               case '13' :
                      controllerName = "bangCtrl";       break;
               case '14' :
                      controllerName = "weekTabCtrl";    break;
          }
            return  controllerName;
      }

}]);
//路由 end

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
                    cache:'false'
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
                    'container@main': {
                        templateUrl: getTemplateUrl
                    }
              }
      })
      .state('main.serviceInfo', {
              url: '/serviceInfo',
              templateUrl: 'pages/serviceInfo.html'
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
      .state('myMoney', {
              url: '/myMoney',
              templateUrl: 'pages/myMoney.html',
              controller:  'moneyCtrl'
      })
      .state('coupon', {
              url: '/coupon',
              templateUrl: 'pages/coupon.html',
              controller:  'couponCtrl'
      })
      .state('invite', {
              url: '/invite',
              templateUrl: 'pages/invite.html',
              controller:  'inviteCtrl'
      })
      .state('address', {
              url: '/address',
              templateUrl: 'pages/address.html',
              cache:'false'
      })
      .state('addAddress', {
              url: '/addAddress',
              templateUrl: 'pages/addAddress.html'
      })
      .state('message', {
              url: '/message',
              templateUrl: 'pages/message.html',
              controller:  'messageCtrl'
      })
      .state('exclusive', {
              url: '/exclusive',
              templateUrl: 'pages/exclusive.html'
      })
      .state('more', {
              url: '/more',
              templateUrl: 'pages/more.html'
      })
      .state('writefeedback', {
              url: '/writefeedback',
              templateUrl: 'pages/writefeedback.html',
              controller:  'writefeedbackCtrl'
      })
      .state('feedback', {
              url: '/feedback',
              templateUrl: 'pages/feedback.html',
              cache:'false'
      })
      .state('version', {
              url: '/version',
              templateUrl: 'pages/version.html',
              controller:  'versionCtrl'
      })
      .state('orderSubmit', {
              url: '/orderSubmit',
              templateUrl: 'pages/orderSubmit.html'
              //controller:  'orderSubmitCtrl'
      })
      .state('orderDetails', {
              url: '/orderDetails',
              templateUrl: 'pages/orderDetails.html'
      })
      .state('orderPayment', {
              url: '/orderPayment',
              templateUrl: 'pages/orderPayment.html'
      })
      .state('orderPaymentWeek', {
              url: '/orderPaymentWeek',
              templateUrl: 'pages/orderPaymentWeek.html'
      })
      .state('userAgreement', {
              url: '/userAgreement',
              templateUrl: 'pages/userAgreement.html',
              cache:'false'
      })
      .state('couponAgreement', {
              url: '/couponAgreement',
              templateUrl: 'pages/couponAgreement.html',
              cache:'false'
      })


      $urlRouterProvider.otherwise('/login');

      function getTemplateUrl($stateParams) {
          var page = "";
          switch($stateParams.id){
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
}]);
//路由 end

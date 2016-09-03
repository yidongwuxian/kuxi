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
                "hd@main": {
                    templateUrl: 'pages/hd.html'
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
                      "hd@main": {
                          templateUrl: 'pages/list-hd.html'
                      },
                      'container@main': {
                          templateUrl: getTemplateUrl
                      }
                }
      })
      .state('week', {
              url: '/week',
              templateUrl: 'pages/week.html'
      })
      .state('serviceInfo', {
              url: '/serviceInfo',
              templateUrl: 'pages/serviceInfo.html',
              cache:'false'
      })
      .state('login', {
              url: '/login',
              templateUrl: 'pages/login.html',
              controller:  'loginCtrl'
      })
      .state('myCenter', {
              url: '/myCenter',
              templateUrl: 'pages/myCenter.html'
      })
      .state('myOrder', {
              url: '/myOrder',
              templateUrl: 'pages/myOrder.html'
      })
      .state('myMoney', {
              url: '/myMoney',
              templateUrl: 'pages/myMoney.html',
              controller:  'moneyCtrl'
      })
      .state('record', {
              url: '/record',
              templateUrl: 'pages/record.html',
              cache:'false'
      })
      .state('coupon', {
              url: '/coupon',
              templateUrl: 'pages/coupon.html',
              cache:'false'
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
      .state('searchAddress', {
              url: '/searchAddress',
              templateUrl: 'pages/searchAddress.html'
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
      .state('writecommit', {
              url: '/writecommit',
              templateUrl: 'pages/writecommit.html',
              cache:'false'
      })

      $urlRouterProvider.otherwise('/login');

      function getTemplateUrl($stateParams) {
          var page = "";
          switch($stateParams.id){
                case '7' :
                     page = "list";    break;
                case '8' :
                      page = "";       break;
                case '9' :
                      page = "";       break;
               case '10' :
                      page = "list";   break;
               case '11' :
                      page = "list";   break;
               case '12' :
                      page = "list";   break;
               case '13' :
                      page = "bang";   break;
          }
            return 'pages/' + page + '.html';
      }

}]);
//路由 end

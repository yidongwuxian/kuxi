app.controller('orderCtrl', orderCtrl);
function orderCtrl($scope, DataGetterService, $localStorage, Constants, $state) {
	DataGetterService.getData(function(data){
	   $scope.topaids = data;
   }, '/api/order_findOrderListByUserInfoForUser.do?&callback=JSON_CALLBACK' , {
   	TOKEN:$localStorage.TOKEN,
   	USERNAME:$localStorage.USERNAME,
   	PAY_STATUS:2
   });

	DataGetterService.getData(function(data){
		$scope.paymenting = data;
	},  '/api/order_findOrderListByUserInfoForUser.do?&callback=JSON_CALLBACK' , {
   	TOKEN:$localStorage.TOKEN,
   	USERNAME:$localStorage.USERNAME,
   	PAY_STATUS:1,
   	ORDER_STATUS:0
   });

	DataGetterService.getData(function(data){
		$scope.completed = data;
	},'/api/order_findOrderListByUserInfoForUser.do?&callback=JSON_CALLBACK' , {
	   	TOKEN:$localStorage.TOKEN,
	   	USERNAME:$localStorage.USERNAME,
	   	PAY_STATUS:1,
	   	ORDER_STATUS:4
	   });

	$scope.goCommit = function(orderInfo){
		$localStorage.OBJECT= orderInfo;
		$state.go("writecommit", {"orderInfo":orderInfo}, { reload: true });
	}
	$scope.goOrderDetails = function(orderInfo) {
		$localStorage.OBJECT= orderInfo;
		$state.go('orderDetails', {} , { reload : true});
	}
	$scope.goOrderDetailsNotPay = function(orderInfo) {
		$localStorage.OBJECT= orderInfo;
		$state.go('orderDetailsNotPay', {} , { reload : true});
	}
};

$(function(){
	$('#myTab li:eq(2)').click(function(){
	   $('#activityModal').modal({
		  keyboard: true
	   })
	});
});

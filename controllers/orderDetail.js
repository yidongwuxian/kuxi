app.controller('orderDetailCtrl', orderDetailCtrl);

function orderDetailCtrl($scope, DataGetterService, $localStorage, Constants, $state) {
	var params = {
		ORDER_NO:$localStorage.OBJECT.ORDER_NO,
		ORDER_ID:$localStorage.OBJECT.ORDER_ID,
		USERNAME:$localStorage.USERNAME,
		TOKEN:$localStorage.TOKEN
	}
	DataGetterService.getData(function(data){
		$scope.guanjia=data.guanjiainfo;
		$scope.orderinfo=data.orderinfo;
		$scope.orderitem=data.orderitem;
		$scope.operatetime=data.operatetime;
	},
		"/api/order_findUserOrderByUserInfoForUser?REQ_TYPE=03&&callback=JSON_CALLBACK&&",
		params);
}
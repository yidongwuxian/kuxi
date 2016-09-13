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


app.controller('orderDetailNotPayCtrl', orderDetailNotPayCtrl);

function orderDetailNotPayCtrl($scope, DataGetterService, $localStorage, Constants, $state) {
	var params = {
		ORDER_NO:$localStorage.OBJECT.ORDER_NO,
		ORDER_ID:$localStorage.OBJECT.ORDER_ID,
		USERNAME:$localStorage.USERNAME,
		TOKEN:$localStorage.TOKEN
	}
	DataGetterService.getData(function(data){
		$scope.guanjia=data.guanjiainfo;
		$scope.isGuanJia = (!! data.guanjiainfo);
		$scope.orderinfo=data.orderinfo;
		$scope.orderitem=data.orderitem;
		$scope.operatetime=data.operatetime;
	},
		"/api/order_findUserOrderByUserInfoForUser?REQ_TYPE=03&&callback=JSON_CALLBACK&&",
		params);
	$scope.newCheckCoupon = function(orderinfo){
		if ( orderinfo.IS_GUANJIA_SUBMIT==1 && orderinfo.IS_WEEKLY ==1 ){
			alert('递减商品不能同时使用优惠券');
			return false;
		}
		// 跳转到优惠券列表页
		//isCanPay 支付状态判断
		var isCanPay = orderinfo.IS_GUANJIA_SUBMIT == 0 ;
		params = {
			isCanPay: isCanPay,
			ORDER_NO:orderinfo.ORDER_NO,
			ORDER_ID:orderinfo.ORDER_ID,

		}
	}
	//
	$scope.cancelOrder= function(orderInfo){
		var params = {
			ORDER_NO:$localStorage.OBJECT.ORDER_NO,
			ORDER_ID:$localStorage.OBJECT.ORDER_ID,
			USERNAME:$localStorage.USERNAME,
			TOKEN:$localStorage.TOKEN
		}
		DataGetterService.getData(function(data){
			alert('取消订单成功!');
			$state.go("myOrder", {}, { reload: true });
		},
		"/api/order_user_delete?REQ_TYPE=03&&callback=JSON_CALLBACK&&",
		params);
	}
}
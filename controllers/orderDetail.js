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
		$scope.maxCoupon = data.maxCoupon;
		/*if (!$scope.orderinfo.PAY_TYPE) {
			$scope.orderinfo.COUPON_CODE_ID = $scope.maxCoupon.COUPON_CODE_ID;
			$scope.orderinfo.FACE_VALUE = $scope.maxCoupon.FACE_VALUE;
		} else {
			$scope.orderinfo.COUPON_CODE_ID = $scope.orderinfo.COUPON_CODE_ID;
			$scope.orderinfo.FACE_VALUE = $scope.orderinfo.FACE_VALUE;
		}*/

	},
		"/api/order_findUserOrderByUserInfoForUser?REQ_TYPE=03&&callback=JSON_CALLBACK&&",
		params);

	$scope.gotoPay= function(orderinfo){
		var params = {
			ORDER_NO:$localStorage.OBJECT.ORDER_NO,
			ORDER_ID:$localStorage.OBJECT.ORDER_ID,
			COUPON_CODE_ID:$scope.COUPON_CODE_ID,
			USERNAME:$localStorage.USERNAME,
			TOKEN:$localStorage.TOKEN
		}
		
		switch ($scope.PAY_TYPE){
			case 1:
				//支付宝支付
			break;
			case 2:
			//微信支付
				DataGetterService.getData(function(data){
					console.log(data);
					function onBridgeReady(){
					   WeixinJSBridge.invoke(
					       'getBrandWCPayRequest', data,
					       function(res){     
					       	   // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
					           if(res.err_msg == "get_brand_wcpay_request：ok" ) {
					           		$state.go("myOrder", {}, { reload: true });
					           }
					       }
					   ); 
					}
					if (typeof WeixinJSBridge == "undefined"){
					   if( document.addEventListener ){
					       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
					   }else if (document.attachEvent){
					       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
					       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
					   }
					}else{
					   onBridgeReady();
					}
				},
				"/pay/weixin?REQ_TYPE=03&&callback=JSON_CALLBACK&&",
				params);
			break;
			case 3:
				// 余额支付
				DataGetterService.getData(function(data){
					$state.go("myOrder", {}, { reload: true });
				},
				"/api/account_pay?REQ_TYPE=03&&callback=JSON_CALLBACK&&",
				params);
			break;
		}
		
	}

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
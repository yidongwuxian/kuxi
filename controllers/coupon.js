app.controller('couponCtrl', function($scope, $http, DataGetterService,$localStorage,Constants,$state){
	//我的优惠券
	DataGetterService.getData(function(data){
        if(data.effectlist){
            $scope.items= data.effectlist;
        }
    }, Constants.coupon_url);

	//充值
	app.config(function($httpProvider){
		$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';
	});

	$scope.submitCouponCode = function(){
		$localStorage.couponCode = $scope.couponCode;
	}

	$scope.submitCoupon = function(){
		DataGetterService.getData(function(){
			$state.go("coupon", {}, { reload: true });
		},'/api/exchange_coupon?&callback=JSON_CALLBACK',{
			RECHARGE_CODE:$localStorage.couponCode ,
			PASSWORD: $scope.couponVal ,
			USERNAME: $localStorage.USERNAME ,
			TOKEN: $localStorage.TOKEN
		});
	}

	//跳转到优惠券使用协议 start
	$scope.couponAgLnk = function(){
		$state.go("couponAgreement", {}, { reload: true });
	}
	//跳转到优惠券使用协议 end

});

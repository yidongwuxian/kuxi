app.controller('couponCtrl', function($scope, $http, DataGetterService,$localStorage,Constants){
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

	$scope.submitCoupon = function(){
		$http.jsonp('http://111.198.143.96:11211/api/exchange_coupon.do?&callback=JSON_CALLBACK&&RECHARGE_CODE='+encodeURI($scope.couponId)+ '&PASSWORD='+encodeURI($scope.couponVal) +'&USERNAME='+$localStorage.USERNAME +'&TOKEN='+$localStorage.TOKEN +'&REQ_TYPE=01').success(
		　　function(data){
				if(data.result){

				}else{
					$localStorage.reset();
					alert(data.resp_msg)
				}
		　　}
		);
	}



});

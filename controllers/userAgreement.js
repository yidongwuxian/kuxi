app.controller('userRegAgCtrl', function($scope,DataGetterService,$localStorage,Constants,$sce){
	//用户注册协议
	DataGetterService.getData(function(data){
		var str = data.SERVICE_AGREEMENT_MARK;
		$scope.userAgHtml = $sce.trustAsHtml(str.replace(/\r\n/g,"<br/>"));

	}, Constants.userreg_agreement_url);
});

app.controller('housekeeperAgCtrl', function($scope,DataGetterService,$localStorage,Constants){
	//管家注册协议
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.housekeeper_agreement_url);
});

app.controller('couponAgreeCtrl', function($scope,DataGetterService,$localStorage,Constants){
	//优惠券使用协议
	DataGetterService.getData(function(data){
		var str = data.SERVICE_AGREEMENT_MARK;
		$scope.couponAgHtml = $sce.trustAsHtml(str.replace(/\r\n/g,"<br/>"));

	}, Constants.coupon_agreement_url);
});

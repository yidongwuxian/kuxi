app.controller('userRegAgCtrl', function($scope,DataGetterService,$localStorage,Constants){
	//用户注册协议
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.userreg_agreement_url);
});

app.controller('housekeeperAgCtrl', function($scope,DataGetterService,$localStorage,Constants){
	//管家注册协议
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.housekeeper_agreement_url);
});

app.controller('couponAgreeCtrl', function($scope,DataGetterService,$localStorage,Constants){
	//优惠券使用协议
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.coupon_agreement_url);
});

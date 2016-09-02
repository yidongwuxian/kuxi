app.controller('moneyCtrl', function($scope, $http, DataGetterService,$localStorage,Constants,$state){
	//账户余额
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.money_url);

	//充值
	app.config(function($httpProvider){
		$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';
	});

	$scope.submitRecharge = function(){
		$http.jsonp('http://111.198.143.96:11211/api/account_recharge.do?&callback=JSON_CALLBACK&&RECHARGE_CODE='+encodeURI($scope.rechareId)+ '&RECHARGE_PASSWORD='+encodeURI($scope.rechareVal) + '&ACCOUNT_ID='+$localStorage.ACCOUNT_ID +'&USERNAME='+$localStorage.USERNAME +'&TOKEN='+$localStorage.TOKEN +'&REQ_TYPE=01').success(
		　　function(data){
				if(data.result){
					$state.go("myMoney", {}, { reload: true });
				}else{
					$localStorage.reset();
					alert(data.resp_msg)
				}
		　　}
		);
	}

	//跳转到消费记录页面
	$scope.rechargeRecord = function(){
		$state.go("record", {}, { reload: true });
	}

});

app.controller('recordCtrl', function($scope, DataGetterService,$localStorage,Constants){
	//消费记录
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.recharge_record_url);
});

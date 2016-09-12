app.controller('moneyCtrl', moneyCtrl);
 function moneyCtrl($scope, $http, DataGetterService,$localStorage,Constants,$state){
	//账户余额
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.money_url);

	//充值
	app.config(function($httpProvider){
		$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';
	});

	$scope.submitRecharge = function(){
		DataGetterService.getData(function(){
			$state.go("myMoney", {}, { reload: true });
		},'/api/account_recharge.do?&callback=JSON_CALLBACK'
		, {RECHARGE_CODE:$scope.rechareId, 
			RECHARGE_PASSWORD:$scope.rechareVal,
			ACCOUNT_ID:$scope.ACCOUNT_ID,
			USERNAME:$scope.USERNAME,
			TOKEN:$scope.TOKEN
		});
	}

	//跳转到消费记录页面
	$scope.rechargeRecord = function(){
		$state.go("record", {}, { reload: true });
	}

};

app.controller('recordCtrl', function($scope, DataGetterService,$localStorage,Constants){
	//消费记录
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.recharge_record_url);
});

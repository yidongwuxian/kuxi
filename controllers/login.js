var httpx = 'http://111.198.143.96:11211';
app.controller('loginCtrl', function($scope,$http,$interval,$localStorage,$state) {
	$scope.master = { TYPE:1, REQ_TYPE: "01"};
	$scope.user1 = angular.copy($scope.master);

	$scope.submitForm = function(){
		$http.jsonp(httpx+'/api/login.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$scope.user.USERNAME+ '&CODE='+$scope.user.CODE+ '').success(
		　　function(data){
				if(data.result){
					$localStorage.USERNAME=data.result.USERNAME;
					$localStorage.TOKEN=data.result.TOKEN;
					$localStorage.AREA_ID=data.result.AREA_ID;
					$localStorage.ACCOUNT_ID = data.result.ACCOUNT_ID;
					$state.go("main", {}, { reload: true });
				}else{
					$localStorage.reset();
					alert(data.resp_msg)
				}
		　　}
		);
	}
    //跳转到用户注册协议 start
	$scope.userAgLnk = function(){
		$state.go("userAgreement", {}, { reload: true });
	}
	//跳转到用户注册协议 end

	//点击返回上一步，跳转回首页 start
	$scope.logingoIndex = function(){
		$state.go("main", {}, { reload: true });
	}
	//点击返回上一步，跳转回首页 end

	$scope.paracont = "获取验证码";
	$scope.paraclass = "but_null";
	$scope.paraevent = true;
	$scope.sendCode = function (){
		var second = 60,
		timePromise = undefined;
		$http.jsonp(httpx+'/api/sendcode.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$scope.user.USERNAME+ '&TYPE='+$scope.user1.TYPE+ '&REQ_TYPE='+$scope.user1.REQ_TYPE).success(
		　　function(data){
		　　　　alert(data.resp_msg);
		　　}
		);
		timePromise = $interval(function(){
		  if(second<=0){
			$interval.cancel(timePromise);
			timePromise = undefined;

			second = 60;
			$scope.paracont = "重发验证码";
			$scope.paraclass = "but_null";
			$scope.paraevent = true;
		  }else{
			$scope.paracont = second + "秒后可重发";
			$scope.paraclass = "not but_null";
			second--;
		  }
		},1000,100);
	}
});

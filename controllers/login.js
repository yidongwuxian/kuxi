app.controller('loginCtrl', loginCtrl);
function loginCtrl($scope,$http,$interval ,DataGetterService, Constants,$localStorage,$state) {
	$scope.master = { TYPE:1, REQ_TYPE: "01"};
	$scope.user1 = angular.copy($scope.master);

	$scope.submitForm = function(){
		var params = {USERNAME:$scope.user.USERNAME,CODE: $scope.user.CODE};
		DataGetterService.getData(function(data){
			$localStorage.USERNAME=data.USERNAME;
			$localStorage.TOKEN=data.TOKEN;
			$localStorage.AREA_ID=data.AREA_ID;
			$localStorage.ACCOUNT_ID = data.ACCOUNT_ID;
			$state.go("main", {}, { reload: true });
		},'/api/login.do?&callback=JSON_CALLBACK',params);
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
		DataGetterService.getData(function(){

		}, "/api/sendcode.do?&callback=JSON_CALLBACK" ,{USERNAME:$scope.user.USERNAME, TYPE:$scope.user1.TYPE});
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
}

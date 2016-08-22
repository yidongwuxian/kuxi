var httpx = 'http://111.198.143.96:11211';
app.controller('loginCtrl', function($scope,$http,$interval,$localStorage) {
	$scope.master = { TYPE:1, REQ_TYPE: "01"};
	$scope.user1 = angular.copy($scope.master);

	$scope.submitForm = function(){
		$http.jsonp(httpx+'/api/login.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$scope.user.USERNAME+ '&CODE='+$scope.user.CODE+ '').success(
		　　function(data){
				if(data.result){
					$localStorage.USERNAME=data.result.USERNAME;
					$localStorage.TOKEN=data.result.TOKEN;
					window.location = "index.html";
					//$location.path('/');
				}else{
					$localStorage.reset();
					alert(data.resp_msg)
				}
		　　}
		);
	}
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

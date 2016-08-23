var httpx = 'http://111.198.143.96:11211';
app.controller('usersCtrl', function($scope,$http,$localStorage) {
	//$scope.master = { TOKEN:$localStorage.TOKEN, USERNAME:$localStorage.USERNAME, REQ_TYPE: "01"};
	$scope.master = { TOKEN:"daf740d0-15f3-4e3c-bfdd-29e6dd4541ce", USERNAME:"18001309176", REQ_TYPE: "01", ORDER_NO: "20160309214440494", ORDER_ID:"2264"};
	$scope.user = angular.copy($scope.master);

	$http.jsonp(httpx+'/api/user_info_center.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$scope.user.USERNAME+ '&TOKEN='+$scope.user.TOKEN+ '&REQ_TYPE'+$scope.user.REQ_TYPE).success(
	　　function(data){
		$scope.data=data.result;
	　　}
	);

	//优惠券页面
	//$scope.goCoupon = function(){
		

	//}

});

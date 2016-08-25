var httpx = 'http://111.198.143.96:11211';
//var app = angular.module('myApp', ["ngStorage"]);
app.controller('messageCtrl', function($scope,$http,$localStorage) {
	$scope.master = { TOKEN:$localStorage.TOKEN, USERNAME:$localStorage.USERNAME, REQ_TYPE: "01"};
	$scope.user = angular.copy($scope.master);
	$http.jsonp(httpx+'/api/getMessagelist.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$scope.user.USERNAME+ '&TOKEN='+$scope.user.TOKEN+ '&REQ_TYPE'+$scope.user.REQ_TYPE).success(
	　　function(data){
			$scope.items=data.result;
	　　}
	);
});

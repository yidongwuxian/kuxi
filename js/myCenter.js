var httpx = 'http://111.198.143.96:11211';
var app = angular.module('myApp', []);
app.controller('usersCtrl', function($scope,$http) {
	$scope.master = { TOKEN:token, USERNAME:userName, REQ_TYPE: "01"};
	$scope.user = angular.copy($scope.master);

	$http.jsonp(httpx+'/api/user_info_center.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$scope.user.USERNAME+ '&TOKEN='+$scope.user.TOKEN+ '&REQ_TYPE'+$scope.user.REQ_TYPE).success(
	　　function(data){
		console.log(data);
	　　}
	);
});

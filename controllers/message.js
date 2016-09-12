app.controller('messageCtrl', function($scope,$http,DataGetterService,$localStorage) {
	$scope.master = { TOKEN:$localStorage.TOKEN, USERNAME:$localStorage.USERNAME, REQ_TYPE: "01"};
	$scope.user = angular.copy($scope.master);
	DataGetterService.getData(function(data){
		$scope.items=data;
	},'/api/getMessagelist.do?&callback=JSON_CALLBACK',
	{USERNAME : $scope.user.USERNAME ,TOKEN:$scope.user.TOKEN}
	);
});

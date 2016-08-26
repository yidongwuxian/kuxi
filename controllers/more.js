app.controller('moreCtrl', function($scope,DataGetterService,$localStorage,Constants) {
	$scope.loginOut = function(){
		DataGetterService.getData(function(data){
			console.log(data);
		}, Constants.loginOut_url);
	}
});

app.controller('usersCtrl', function($scope,DataGetterService,Constants) {
	DataGetterService.getData(function(data){$scope.data= data;}, Constants.mycenter_url);
});

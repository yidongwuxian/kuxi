app.controller('inviteCtrl', function($scope,DataGetterService,Constants) {
	DataGetterService.getData(function(data){$scope.data= data;}, Constants.invite_url);
});

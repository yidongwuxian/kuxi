app.controller('versionCtrl', function($scope, DataGetterService,$localStorage,Constants){
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.version_url);
});

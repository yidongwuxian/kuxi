app.controller('clothTabCtrl', clothTabCtrl);
function clothTabCtrl($scope, DataGetterService, Constants,$state) {
	DataGetterService.getData(function(data){
	   $scope.lists = data.goodsList;
	}, Constants.list_url);
	$scope.goserviceInfo = function(){
		$state.go("serviceInfo", {}, { reload: true });
	}
}

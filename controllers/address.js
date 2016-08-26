app.controller('addressCtrl', function($scope,DataGetterService,$localStorage,Constants,$state){
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.address_url);
	$scope.addAddress = function(){
		$state.go("addAddress", {}, { reload: true });
	}
	$scope.delAddress = function(){
		DataGetterService.getData(function(data){}, Constants.del_address_url);
	}
});

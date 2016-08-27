app.controller('carsCtrl', function ($scope, $state) {
	$scope.goserviceInfo = function(){
		$state.go("serviceInfo", {}, { reload: true });
	}
});

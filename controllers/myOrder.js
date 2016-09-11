app.controller('orderCtrl', orderCtrl);
function orderCtrl($scope, DataGetterService, $localStorage, Constants, $state) {
	DataGetterService.getData(function(data){
	   $scope.topaids = data;
   }, Constants.order_topaids_url);

	DataGetterService.getData(function(data){
		$scope.paymenting = data;
	}, Constants.order_paymenting_url);

	DataGetterService.getData(function(data){
		$scope.completed = data;
	}, Constants.order_completed_url);

	$scope.goCommit = function(){
		$state.go("writecommit", {}, { reload: true });
	}
	$scope.goOrderDetails = function(orderInfo) {
		$localStorage.OBJECT= orderInfo;
		$state.go('orderDetails', {} , { reload : true});
	}
};

$(function(){
	$('#myTab li:eq(2)').click(function(){
	   $('#activityModal').modal({
		  keyboard: true
	   })
	});
});

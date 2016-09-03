app.controller('orderCtrl', orderCtrl);
function orderCtrl($scope, DataGetterService, Constants) {
	DataGetterService.getData(function(data){
	   $scope.topaids = data;
   }, Constants.order_topaids_url);

	DataGetterService.getData(function(data){
		$scope.paymenting = data;
	}, Constants.order_paymenting_url);

	DataGetterService.getData(function(data){
		$scope.completed = data;
	}, Constants.order_completed_url);
};

$(function(){
	$('#myTab li:eq(2)').click(function(){
	   $('#activityModal').modal({
		  keyboard: true
	   })
	});
});
